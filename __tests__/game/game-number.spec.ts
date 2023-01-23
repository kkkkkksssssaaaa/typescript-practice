import { GameNumber } from '../../src/game/game-number';

describe('game-number', () => {
  test('범위 내에 속하는 값을 인자로 보내 초기화할 수 있다', async () => {
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

describe('game-number.equals()', () => {
  test('같은 숫자로 초화한 객체라면 true 를 반환환다', async () => {
    const compareTarget: GameNumber = GameNumber.of(1);
    await expect(compareTarget.equals(GameNumber.of(1))).toBeTruthy();
  });

  test('다른 숫자로 초화한 객체는 false 를 반환환다', async () => {
    const compareTarget: GameNumber = GameNumber.of(1);
    await expect(compareTarget.equals(GameNumber.of(2))).toBeFalsy();
  });
});