export class Numbers {

  private static readonly MIN: Number = 1;
  private static readonly MAX: Number = 9;

  private constructor() { }

  public static isMoreThanMax(value: Number): Boolean {
    return value > Numbers.MAX;
  }

  public static isLessThanMin(value: Number): Boolean {
    return value < Numbers.MIN;
  }

  public static isOverRange(value: Number): Boolean {
    return Numbers.isMoreThanMax(value) 
      || Numbers.isLessThanMin(value);
  }
}