import {
  describe, expect,
} from '@jest/globals';
import orderByProps from '../app';

const data = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

describe('Проверка сортировки массива', () => {
  test('Значение переданные в функции, находятся вверху обьекта, остальные отсортированны по алфавиту', () => {
    expect(orderByProps(data, ['name', 'level'])).toEqual([{ name: 'мечник' }, { level: 2 }, { attack: 80 }, { defence: 40 }, { health: 10 }]);
  });

  test('Если передали неизвестные ключи', () => {
    expect(orderByProps(data, ['name', 'level'])).toEqual([{ name: 'мечник' }, { level: 2 }, { attack: 80 }, { defence: 40 }, { health: 10 }]);
  });
  test('Проверка на то что пришел не массив', () => {
    expect(() => { orderByProps(data, 1); }).toThrowError(new Error('В функцию передали не массив'));
  });
});
