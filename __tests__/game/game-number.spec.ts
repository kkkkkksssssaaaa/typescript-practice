import { GameNumber } from '../../src/game/game-number';

describe('game-number', () => {
  test('범위 내에 속하는 값으로 인자로 보내 초기화할 수 있다', async () => {
    await expect(() => GameNumber.of(5)).not.toThrow();
  });

  test('경계값 1로 초기화할 수 있다', async () => {
    await expect(() => GameNumber.of(1)).not.toThrow();
  });

  test('경계값 9로 초기화할 수 있다', async () => {
    await expect(() => GameNumber.of(1)).not.toThrow();
  });

  test('범위를 벗어난 인자로 초기화할 수 없다', async () => {
    await expect(() => GameNumber.of(15)).toThrowError();
  });

  test('음수로 초기화할 수 없다', async () => {
    await expect(() => GameNumber.of(-1)).toThrowError();
  });

  test('0으로 초기화할 수 없다', async () => {
    await expect(() => GameNumber.of(0)).toThrowError();
  });
});

describe('game-number.get()', () => {
  test('인스턴스에서 값을 가져올 수 있다', async () => {
    await expect(GameNumber.of(1).get()).toBe(1);
  });
});