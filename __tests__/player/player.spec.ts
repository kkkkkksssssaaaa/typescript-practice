import { GameNumbers } from '../../src/game/game-numbers';
import { Player } from '../../src/player/player';

describe('player', () => {
  test('중복되지 않는 1~9까지의 숫자 세 개로 초기화할 수 있다', () => {
    expect(() => Player.joinUserWithNumbers(GameNumbers.of([1, 2, 3]))).not.toThrow();
  });

  test('중복된 숫자 세 개로 초기화하면 예외를 던진다', () => {
    expect(() => Player.joinUserWithNumbers(GameNumbers.of([1, 2, 2]))).toThrow();
  });
});