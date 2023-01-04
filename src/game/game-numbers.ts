import { GameNumber } from "./game-number";

export class GameNumbers {

  private static readonly LENGTH: Number = 3;
  
  private readonly values: GameNumber[];

  private constructor(values: GameNumber[]) {
    this.checkLength(values);

    this.values = values;
  }

  public static of(values: GameNumber[]): GameNumbers {
    return new GameNumbers(values);
  }

  public toArray(): GameNumber[] {
    return this.values;
  }

  private checkLength(values: GameNumber[]): void {
    if (values.length !== 3) {
      throw new Error();
    }
  }
}