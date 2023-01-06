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
    if (this.toSet(values).size !== GameNumbers.LENGTH) {
      throw new Error();
    }
  }

  private toSet(values: GameNumber[]): Set<Number> {
    const convertToSet: Set<Number> = new Set<Number>();

    values.forEach(value => {
      convertToSet.add(value.get());
    });

    return convertToSet;
  }
}