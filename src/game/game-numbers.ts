import { GameNumber } from "./game-number";

export class GameNumbers {

  private readonly values: GameNumber[];

  private constructor(values: GameNumber[]) {
    this.values = values;
  }

  public static of(values: GameNumber[]): GameNumbers {
    return new GameNumbers(values);
  }

  public toArray(): GameNumber[] {
    return this.values;
  }
}