import { GameNumbers } from './game-numbers';
export class Player {

  private readonly playersNumber: GameNumbers;

  private constructor(numbers: GameNumbers) {
    this.playersNumber = numbers;
  }

  public static joinUserWithNumbers(numbers: GameNumbers) {
    return new Player(numbers);
  }

  public numbers(): GameNumbers {
    return this.playersNumber;
  }
}