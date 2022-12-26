export class GameNumber {

  private static readonly MIN: Number = 1;
  private static readonly MAX: Number = 9;

  private readonly value: Number;

  private constructor(value: Number) {
    this.checkRange(value);

    this.value = value;
  }

  public static of(value: Number): GameNumber {
    return new GameNumber(value);
  }

  get(): Number {
    return this.value;
  }

  private checkRange(value: Number): void {
    if (value > GameNumber.MAX) {
      throw new Error();
    }

    if (value < GameNumber.MIN) {
      throw new Error();
    }
  }
}