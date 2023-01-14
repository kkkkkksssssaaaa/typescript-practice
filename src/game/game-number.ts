import { Numbers } from '../common/numbers';

export class GameNumber {

  private readonly value: number;

  private constructor(value: number) {
    this.checkRange(value);

    this.value = value;
  }

  public static of(value: number): GameNumber {
    return new GameNumber(value);
  }

  public get(): number {
    return this.value;
  }

  private checkRange(value: number): void {
    if (Numbers.isOverRange(value)) {
      throw new Error();
    }
  }
}