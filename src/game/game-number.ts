import { Numbers } from '../common/numbers';

export class GameNumber {

  private readonly value: Number;

  private constructor(value: Number) {
    this.checkRange(value);

    this.value = value;
  }

  public static of(value: Number): GameNumber {
    return new GameNumber(value);
  }

  public get(): Number {
    return this.value;
  }

  private checkRange(value: Number): void {
    if (Numbers.isOverRange(value)) {
      throw new Error();
    }
  }
}