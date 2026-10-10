// Реестр персонажей: кто есть, как выглядит карточка, какие бонусы в игре.
import { buildMasha } from './masha.js?v=2026100901';
import { buildCatbus } from './catbus.js?v=2026100901';
import { buildMoti, MOTI_SKINS } from './moti.js?v=2026100901';
import { buildNoFace } from './noface.js?v=2026100901';
import { buildKid, loadLook } from './kid.js?v=2026100901';
import { buildBrothers } from './brothers.js?v=2026101004';

const lookOf = skin => { try { return skin && skin !== 'classic' ? JSON.parse(skin) : loadLook(); } catch { return loadLook(); } };

export const HEROES = [
  {
    id: 'kid', name: 'Мой котик', rarity: 'МОЙ ГЕРОЙ', rarityClass: 'rare',
    about: 'Твой собственный герой! Выбери, девочка или мальчик, причёску, свитер, ушки и хвостик котика.',
    ability: 'Маскировка', abilityText: 'Q — превратиться в предмет, G — помахать. Прыгучий и ловкий, как Маша.',
    tags: ['Свой скин', 'Маскировка'],
    build: skin => buildKid(lookOf(skin)), radius: 0.42, height: 1.6,
    custom: true, bot: false,       // не бегает ботом — это только твой герой
    cam: { distance: 6.0, height: 1.4 },
  },
  {
    id: 'masha', name: 'Маша', rarity: 'ГЕРОЙ', rarityClass: 'hero',
    about: 'Смелая девочка, которая нашла дорогу в мир духов. Лёгкая, прыгучая и очень быстрая на поворотах.',
    ability: 'Лёгкие ноги', abilityText: 'Прыгает выше всех и резко стартует. E — рывок, G — помахать.',
    tags: ['Прыжок', 'Выносливость'],
    build: buildMasha, radius: 0.42, height: 1.72,
    cam: { distance: 6.2, height: 1.45 },
  },
  {
    id: 'catbus', name: 'НэкоБус', rarity: 'ЭПИЧЕСКИЙ', rarityClass: 'epic',
    about: 'Дух-путешественник, который увезёт тебя в самые удивительные места. Всегда приходит, когда ты в пути.',
    ability: 'Скоростной рейс', abilityText: 'Самый быстрый на прямой, но тяжёлый и медленно поворачивает. E — длинный рывок.',
    tags: ['Скорость', 'Исследование'],
    build: buildCatbus, radius: 0.85, height: 1.9,
    cam: { distance: 8.2, height: 2.1, side: 0.6 },
  },
  {
    id: 'moti', name: 'Дядюшка Моти', rarity: 'ЭПИЧЕСКИЙ', rarityClass: 'epic',
    about: 'Добродушный великан, который носит на спине уютный приют для духов. Там всегда найдётся место для новых друзей.',
    ability: 'Уютный приют', abilityText: 'Купол, в котором Безлик никого не поймает. Ещё 3 умения: 2, 3, 4, F.',
    tags: ['Защита', 'Лечение', 'Поддержка', 'Команда'],
    build: skin => buildMoti(skin), radius: 0.85, height: 2.4,
    skins: MOTI_SKINS,
    helper: true,                  // бот-Моти бежит выручать друзей
    cam: { distance: 8.4, height: 3.0, side: 1.3 },   // выше рюкзака и чуть сбоку
  },
  {
    id: 'brothers', name: 'Три Брата', rarity: 'РЕДКИЙ', rarityClass: 'rare',
    about: 'Три упрямых духа в одном плаще. Спорят между собой, пугают Безликов и один раз за фазу вырываются из поимки.',
    ability: 'Страх и гипноз', abilityText: '1 — волна страха; 2 — гипноз сбивает преследователя с пути; 3 — грозный взгляд раскрывает маскировку. Упрямство спасает от первой поимки в каждой фазе.',
    tags: ['Страх', 'Контроль', 'Команда'],
    build: buildBrothers, radius: 0.7, height: 3.05,
    cam: { distance: 8.6, height: 3.0, side: 0.9 },
  },
];

export const GHOST = {
  id: 'noface', name: 'Безлик', rarity: 'ОХОТНИК', rarityClass: 'hunter',
  about: 'Тихий дух в белой маске. Сначала ищет спрятавшихся, потом догоняет. Умеет притворяться героями и вещами.',
  ability: 'Маскировка', abilityText: 'Играешь водящим! 1 — стать героем, 2 — стать предметом, E — рывок (3 заряда), Пробел — взлететь.',
  tags: ['Охота', 'Маскировка', 'Полёт'],
  build: buildNoFace, radius: 0.55, height: 2.5,
  cam: { distance: 7.6, height: 2.3, side: 0.6 },
};
