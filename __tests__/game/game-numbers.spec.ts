import { GameNumber } from "../../src/game/game-number";
import { GameNumbers } from "../../src/game/game-numbers"

describe('game-numbers', () => {
  test('배열의 길이가 3이 아니면 예외를 던진다', () => {
    const arrayOfGameNumber: Number[] = [1, 2];

    expect(() => GameNumbers.of(arrayOfGameNumber)).toThrow();
  });

  test('배열의 길이가 3이면 예외를 던지지 않는다', () => {
    const arrayOfGameNumber: Number[] = [1, 2, 3];

    expect(() => GameNumbers.of(arrayOfGameNumber)).not.toThrow();
  });
});