import { GameNumber } from "./game-number";

export class GameNumbers {

  private static readonly LENGTH: number = 3;
  
  private readonly values: GameNumber[];

  private constructor(values: number[]) {
    this.checkLength(values);

    this.values = this.toArrayOfGameNumber(values);
  }

  public static of(values: number[]): GameNumbers {
    return new GameNumbers(values);
  }

  public toArray(): GameNumber[] {
    return this.values;
  }

  public getOne(index: number): number {
    return this.values[index].get();
  }

  public equals(values: GameNumbers): boolean {
    for (let i: number = 0; i < GameNumbers.LENGTH; i++) {
      this.comapreOrThrow(this.toArray()[i], values.toArray()[i]);
    }

    return true;
  }

  private checkLength(values: number[]): void {
    if (this.toSet(values).size !== GameNumbers.LENGTH) {
      throw new Error();
    }
  }

  private toSet(values: number[]): Set<number> {
    const convertToSet: Set<number> = new Set<number>();

    values.forEach(value => {
      convertToSet.add(value);
    });

    return convertToSet;
  }

  private toArrayOfGameNumber(values: number[]): GameNumber[] {
    let convertToArray: GameNumber[] = new Array();

    values.forEach(value => {
      convertToArray.push(GameNumber.of(value));
    });

    return convertToArray;
  }
}