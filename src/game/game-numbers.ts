import { GameNumber } from "./game-number";

export class GameNumbers {

  private static readonly LENGTH: Number = 3;
  
  private readonly values: GameNumber[];

  private constructor(values: Number[]) {
    this.checkLength(values);

    this.values = this.toArrayOfGameNumber(values);
  }

  public static of(values: Number[]): GameNumbers {
    return new GameNumbers(values);
  }

  public toArray(): GameNumber[] {
    return this.values;
  }

  private checkLength(values: Number[]): void {
    if (this.toSet(values).size !== GameNumbers.LENGTH) {
      throw new Error();
    }
  }

  private toSet(values: Number[]): Set<Number> {
    const convertToSet: Set<Number> = new Set<Number>();

    values.forEach(value => {
      convertToSet.add(value);
    });

    return convertToSet;
  }

  private toArrayOfGameNumber(values: Number[]): GameNumber[] {
    let convertToArray: GameNumber[] = new Array();

    values.forEach(value => {
      convertToArray.push(GameNumber.of(value));
    });

    return convertToArray;
  }
}