import { GameNumbers } from "../../src/game/game-numbers"

describe('game-numbers', () => {
  test('배열의 길이가 3이 아니면 예외를 던진다', () => {
    const arrayOfGameNumber: number[] = [1, 2];

    expect(() => GameNumbers.of(arrayOfGameNumber)).toThrow();
  });

  test('배열의 길이가 3이면 예외를 던지지 않는다', () => {
    const arrayOfGameNumber: number[] = [1, 2, 3];

    expect(() => GameNumbers.of(arrayOfGameNumber)).not.toThrow();
  });
});

describe('game-numbers.toArray', () => {
  test('조회한 배열은 입력 순서가 보장된다', () => {
    const arrayOfGameNumber: number[] = [1, 2, 3];
    const gameNumbers: GameNumbers = GameNumbers.of(arrayOfGameNumber);

    expect(gameNumbers.getOne(0)).toBe(1);
    expect(gameNumbers.getOne(1)).toBe(2);
    expect(gameNumbers.getOne(2)).toBe(3);
  });
});

describe('game-numbers.equals', () => {
  test('같은 배열로 초기화한 객체라면 true 를 반환한다', () => {
    const leftNumbersArray: number[] = [1, 2, 3];
    const leftNumbers: GameNumbers = GameNumbers.of(leftNumbersArray);

    const rightNumbersArray: number[] = [1, 2, 3];
    const rightNumbers: GameNumbers = GameNumbers.of(rightNumbersArray);

    expect(leftNumbers.equals(rightNumbers)).toBe(true);
  });
});