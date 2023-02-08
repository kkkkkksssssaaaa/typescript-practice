export class Numbers {

  private static readonly MIN: number = 1;
  private static readonly MAX: number = 9;

  private constructor() { }

  public static isMoreThanMax(value: number): boolean {
    return value > Numbers.MAX;
  }

  public static isLessThanMin(value: number): boolean {
    return value < Numbers.MIN;
  }

  public static isOverRange(value: number): boolean {
    return Numbers.isMoreThanMax(value) 
      || Numbers.isLessThanMin(value);
  }

  public static getRandomOne(): number {
     return Math.random() * (this.MAX - this.MIN) + this.MIN;
  }
}