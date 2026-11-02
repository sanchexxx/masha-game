#!/usr/bin/env python3
"""Проверки игры в браузере WebKit (движок Safari/iPhone) через Playwright.

  python3 tools/e2e/checks.py <проверка> [папка_для_снимков]
  BASE=https://bezlik.ru/ python3 tools/e2e/checks.py menu

Проверки:
  menu      — экскурсия «Пройти обучение» (6 шагов меню) на ПК и iPhone 13 → старт тренировки
  train     — тренировка за Машу по клавишам до конца (игрок неуязвим) → экран «Обучение пройдено»
  totoro    — Тоторо: дуб (+ подъём в крону), домик, фонарь, рёв, окошко помощи и НэкоБус, полёт, невидимость
  watch     — режим «Смотреть» 40 с: бот-Тоторо сам пользуется умениями, ошибок нет
  phone     — iPhone горизонтально: выбор Тоторо, обучение за него кнопками умений
  look      — крупный план каждого героя на экране выбора (для правок дизайна)
Вывод — JSON с результатами + ошибки страницы. Снимки — в <папка>/shots/.
"""
import asyncio, json, os, sys
from playwright.async_api import async_playwright

BASE = os.environ.get('BASE', 'http://127.0.0.1:8093/')
OUT = os.path.join(sys.argv[2] if len(sys.argv) > 2 else 'e2e-out', 'shots')
os.makedirs(OUT, exist_ok=True)
SEEN = "localStorage.setItem('masha-game-tutorial-seen-v1','1')"
P = 'window.__game.round.player'


async def open_game(b, errs, seen=True, **ctx):
    c = await b.new_context(**ctx) if ctx else await b.new_context(viewport={'width': 1600, 'height': 900})
    if seen:
        await c.add_init_script(SEEN)
    page = await c.new_page()
    page.on('pageerror', lambda e: errs.append('pageerror: ' + str(e)))
    page.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
    await page.goto(BASE)
    await page.wait_for_function('window.__game && window.__game.state === "select"', timeout=60000)
    return page


async def start_round(page, hero, training=False):
    await page.click(f'.lu-tag[data-id={hero}]')
    await page.wait_for_timeout(400)
    await page.click('#btn-choose')
    await page.wait_for_timeout(400)
    await page.click('#btn-maps-train' if training else '#btn-maps-go')
    await page.wait_for_function('window.__game.state === "play"', timeout=30000)
    await page.wait_for_timeout(800)


async def check_menu(b, errs, mode):
    ctx = {'viewport': {'width': 1600, 'height': 900}} if mode == 'desktop' else dict(b._pw.devices['iPhone 13'])
    page = await open_game(b, errs, seen=False, **ctx)
    await page.wait_for_selector('#coach.on', timeout=10000)
    await page.wait_for_timeout(1500)
    shot = lambda n: page.screenshot(path=f'{OUT}/menu_{mode}_{n}.png')
    await shot('1_pick')
    x, y = await page.evaluate('(() => { const r = document.querySelector(".lu-tag[data-id=masha]").getBoundingClientRect(); return [r.x + r.width / 2, r.bottom + 60]; })()')
    if mode == 'desktop':
        await page.mouse.click(x, y)
    else:
        await page.touchscreen.tap(x, y)
    await page.wait_for_timeout(1800); await shot('2_powers')
    await page.click('.co-next', force=True); await page.wait_for_timeout(900); await shot('3_play')
    await page.click('#btn-choose'); await page.wait_for_timeout(1200); await shot('4_map')
    await page.click('.map-card[data-id=village]'); await page.wait_for_timeout(900); await shot('5_mode')
    await page.click('#maps-mode-hide'); await page.wait_for_timeout(900); await shot('6_train')
    await page.click('#btn-maps-train')
    await page.wait_for_function('window.__game.state === "play"', timeout=30000)
    await page.wait_for_timeout(1500); await shot('7_task')
    return await page.evaluate('window.__game.training ? window.__game.training.tasks.map(t => t.title) : null')


async def check_train(b, errs):
    page = await open_game(b, errs)
    await start_round(page, 'masha', training=True)
    await page.evaluate(f'setInterval(() => {{ const p = {P}; if (p) p.invulnerableT = 5; }}, 200)')
    k = lambda: page.evaluate('window.__game.training ? window.__game.training.k : -1')
    log = []

    async def hold(keys, ms):
        for x in keys: await page.keyboard.down(x)
        await page.wait_for_timeout(ms)
        for x in reversed(keys): await page.keyboard.up(x)
        await page.wait_for_timeout(1100)
    await hold(['w'], 1500); log.append(('идти', await k()))
    await page.click('.tr-skip'); await page.wait_for_timeout(1200); log.append(('камера-пропуск', await k()))
    await hold(['Shift', 'w'], 1600); log.append(('бег', await k()))
    await page.keyboard.press('Space'); await page.wait_for_timeout(1300); log.append(('прыжок', await k()))
    await page.keyboard.down('w'); await page.wait_for_timeout(200); await page.keyboard.press('e'); await page.keyboard.up('w')
    await page.wait_for_timeout(1300); log.append(('рывок', await k()))
    await hold(['c'], 400); log.append(('присесть', await k()))
    for key in ['1', '2', 'q']:
        await page.keyboard.press(key); await page.wait_for_timeout(1500); log.append((key, await k()))
    await page.keyboard.press('q'); await page.wait_for_timeout(600)
    await page.screenshot(path=f'{OUT}/train_bush.png')
    await page.click('.tr-skip'); await page.wait_for_timeout(1500); log.append(('куст-пропуск', await k()))
    await page.wait_for_function('window.__game.state === "result"', timeout=60000)
    await page.wait_for_timeout(600)
    await page.screenshot(path=f'{OUT}/train_done.png')
    log.append(('итог', await page.inner_text('#td-title'), 'лишний экран итога' if await page.evaluate('document.getElementById("result").classList.contains("show")') else 'ок'))
    return log


async def check_totoro(b, errs):
    page = await open_game(b, errs)
    await start_round(page, 'totoro')
    E = page.evaluate
    await E(f'setInterval(() => {{ const p = {P}; if (p) p.invulnerableT = 5; }}, 100)')
    log = {}
    await page.keyboard.down('w'); await page.wait_for_timeout(1800); await page.keyboard.up('w'); await page.wait_for_timeout(400)
    await page.keyboard.press('1'); await page.wait_for_timeout(2000)
    await page.screenshot(path=f'{OUT}/totoro_oak.png')
    await page.keyboard.press('2'); await page.wait_for_timeout(1500)
    await page.keyboard.press('3'); await page.wait_for_timeout(1700)
    await page.screenshot(path=f'{OUT}/totoro_hut_lamp.png')
    log['созданное'] = await E('window.__game.round.nature.items.map(i => i.kind)')
    # подъём по стволу: встаём к дубу с востока, камера смотрит на запад, жмём W
    await E(f'''(() => {{ const g = window.__game, o = g.round.nature.items.find(i => i.kind === 'oak'); const c = {P}.ctrl;
        c.pos.set(o.x + 1.75, 0, o.z); c.vel.set(0, 0, 0); g.cam.yaw = Math.PI / 2; }})()''')
    # ~1,5 с хватает долезть; дольше — Тоторо пройдёт крону насквозь и спрыгнет с другой стороны
    await page.keyboard.down('w'); await page.wait_for_timeout(1500); await page.keyboard.up('w'); await page.wait_for_timeout(600)
    log['высота_после_подъёма'] = await E(f'+{P}.ctrl.pos.y.toFixed(2)')
    await page.screenshot(path=f'{OUT}/totoro_deck.png')
    await E(f'(() => {{ const c = {P}.ctrl; c.pos.set(0, 0, 20); c.vel.set(0, 0, 0); window.__game.cam.yaw = 0; }})()')
    await page.keyboard.press('4'); await page.wait_for_timeout(900)
    log['обманки'] = await E('window.__game.round.nature.decoys.map(d => d.name)')
    await page.wait_for_function('window.__game.round.activeGhosts.some(g => g.active)', timeout=40000)
    await E(f'''(() => {{ const R = window.__game.round, me = R.player, g = R.activeGhosts.find(g => g.active);
        g.ctrl.pos.set(me.ctrl.pos.x + 3, 0, me.ctrl.pos.z - 2); g.stunT = 0; }})()''')
    await page.keyboard.press('5'); await page.wait_for_timeout(600)
    log['рёв_неповоротлив_с'] = await E('window.__game.round.activeGhosts.map(g => +g.clumsyT.toFixed(1))')
    await page.screenshot(path=f'{OUT}/totoro_roar.png')
    # друга ловит Безлик (малышей-обманок убираем, чтобы Безлик не отвлёкся на них); держим погоню 3 с
    await E(f'''(() => {{ const R = window.__game.round; R.nature.decoys.forEach(d => R.nature.decoyCaught(d));
        const ally = R.agents.find(a => !a.isPlayer && a.alive); ally.invulnerableT = 30;
        const g = R.activeGhosts.find(g => g.active); R.player.abilities.get('nekohelp').cdLeft = 0;
        const hold = () => {{ if (R.nature.decoys.some(d => d.name === 'НэкоБус')) return;   // НэкоБус уже увёл — не мешаем
          g.clumsyT = 0; g.stunT = 0; g.target = ally; g.state = 'hunt'; g.lastSeen = ally.ctrl.pos.clone();
          if (g.pos.distanceTo(ally.ctrl.pos) > 6) g.ctrl.pos.set(ally.ctrl.pos.x + 4, ally.ctrl.pos.y, ally.ctrl.pos.z); }};
        hold(); const id = setInterval(hold, 100); setTimeout(() => clearInterval(id), 3000); }})()''')
    await page.wait_for_selector('#help-card:not(.hidden)', timeout=3000)
    await page.wait_for_timeout(400)
    await page.screenshot(path=f'{OUT}/totoro_help.png')
    await page.click('#hc-send'); await page.wait_for_timeout(700)
    log['нэкобус_увёл'] = await E('(() => { const R = window.__game.round; const n = R.nature.decoys.find(d => d.name === "НэкоБус"); return !!n && R.activeGhosts.some(g => g.target === n); })()')
    await page.keyboard.press('r'); await page.wait_for_timeout(1500)
    log['полёт'] = await E(f'(() => {{ const c = {P}.ctrl; return {{ rideT: +c.rideT.toFixed(1), y: +c.pos.y.toFixed(1) }}; }})()')
    await page.screenshot(path=f'{OUT}/totoro_ride.png')
    await page.wait_for_timeout(6500)
    await page.keyboard.press('q'); await page.wait_for_timeout(500)
    log['невидимость_с'] = await E(f'+({P}.vanishT || 0).toFixed(1)')
    return log


async def check_watch(b, errs):
    page = await open_game(b, errs, viewport={'width': 1440, 'height': 860})
    await page.click('#btn-watch')
    await page.wait_for_timeout(40000)
    return await page.evaluate('(() => { const R = window.__game.round; const t = R.agents.find(a => a.hero.id === "totoro"); return { фаза: R.phase, создано: R.nature.items.map(i => i.kind), умения_в_ходу: t ? t.abilities.list.filter(a => a.cdLeft > 0).map(a => a.id) : [] }; })()')


async def check_phone(b, errs):
    page = await open_game(b, errs, **dict(b._pw.devices['iPhone 13 landscape']))
    await page.tap('.lu-tag[data-id=totoro]'); await page.wait_for_timeout(1200)
    await page.screenshot(path=f'{OUT}/phone_select.png')
    await page.tap('#btn-choose'); await page.wait_for_timeout(400)
    await page.tap('#btn-maps-train')
    await page.wait_for_function('window.__game.state === "play" && window.__game.training', timeout=30000)
    await page.wait_for_timeout(1000)
    for _ in range(6):
        await page.evaluate('document.querySelector(".tr-skip").click()'); await page.wait_for_timeout(1000)
    done = []
    for ab in ['oak', 'hut', 'lamp', 'minis', 'troar', 'nekoride', 'vanish']:
        k0 = await page.evaluate('window.__game.training.k')
        await page.evaluate(f'document.querySelector(\'.ab[data-id="{ab}"]\').click()')
        await page.wait_for_timeout(2200)
        done.append((ab, k0, await page.evaluate('window.__game.training.k')))
    await page.screenshot(path=f'{OUT}/phone_train.png')
    return done


async def check_look(b, errs):
    page = await open_game(b, errs)
    ids = await page.evaluate('window.__game.lineup.slots.map(s => s.hero.id)')
    for hid in ids:
        for i, ang in enumerate([0, 1.57, 3.14]):
            await page.evaluate(f'''(() => {{ const g = window.__game; g.state = 'loading';
              const s = g.lineup.slots.find(s => s.hero.id === '{hid}'); const r = s.char.root, h = s.hero.height;
              r.rotation.y = {ang}; const p = r.position;
              g.camera.position.set(p.x, p.y + h * 0.6, p.z + h * 2.4); g.camera.lookAt(p.x, p.y + h * 0.5, p.z); g.camera.updateMatrixWorld();
              g.renderer.render(g.scene, g.camera); }})()''')
            await page.wait_for_timeout(250)
            await page.screenshot(path=f'{OUT}/look_{hid}_{i}.png', clip={'x': 500, 'y': 60, 'width': 600, 'height': 780})
    return ids


async def main():
    what = sys.argv[1] if len(sys.argv) > 1 else 'menu'
    errs = []
    async with async_playwright() as pw:
        b = await pw.webkit.launch()
        b._pw = pw
        if what == 'menu':
            res = {'ПК': await check_menu(b, errs, 'desktop'), 'iPhone': await check_menu(b, errs, 'mobile')}
        else:
            res = await {'train': check_train, 'totoro': check_totoro, 'watch': check_watch, 'phone': check_phone, 'look': check_look}[what](b, errs)
        await b.close()
    print(json.dumps(res, ensure_ascii=False, indent=1))
    print('ошибки страницы:', errs[:10] or 'нет')


asyncio.run(main())
