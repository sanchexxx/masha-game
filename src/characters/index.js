// Реестр персонажей: кто есть, как выглядит карточка, какие бонусы в игре.
import { buildMasha } from './masha.js';
import { buildCatbus } from './catbus.js';
import { buildMoti, MOTI_SKINS } from './moti.js';
import { buildNoFace } from './noface.js';

export const HEROES = [
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
    cam: { distance: 8.2, height: 1.9 },
  },
  {
    id: 'moti', name: 'Дядюшка Моти', rarity: 'ЭПИЧЕСКИЙ', rarityClass: 'epic',
    about: 'Добродушный великан, который носит на спине уютный приют для духов. Там всегда найдётся место для новых друзей.',
    ability: 'Уютный приют', abilityText: 'Купол, в котором Безлик никого не поймает. Ещё 3 умения: 2, 3, 4, F.',
    tags: ['Защита', 'Лечение', 'Поддержка', 'Команда'],
    build: skin => buildMoti(skin), radius: 0.85, height: 2.4,
    skins: MOTI_SKINS,
    cam: { distance: 8.8, height: 2.2 },
  },
];

export const GHOST = {
  id: 'noface', name: 'Безлик', rarity: 'ОХОТНИК', rarityClass: 'hunter',
  build: buildNoFace, radius: 0.55, height: 2.5,
};
