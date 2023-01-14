export class Numbers {

  private static readonly MIN: number = 1;
  private static readonly MAX: number = 9;

  private constructor() { }

  public static isMoreThanMax(value: number): Boolean {
    return value > Numbers.MAX;
  }

  public static isLessThanMin(value: number): Boolean {
    return value < Numbers.MIN;
  }

  public static isOverRange(value: number): Boolean {
    return Numbers.isMoreThanMax(value) 
      || Numbers.isLessThanMin(value);
  }
}