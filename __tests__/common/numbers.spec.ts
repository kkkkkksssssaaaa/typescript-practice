import { Numbers } from "../../src/common/numbers";

describe('numbers.isMoreThanMax', () => {
  test('음수를 인자로 넘기면 false 를 반환한다', async () => {
    await expect(Numbers.isMoreThanMax(-1)).toEqual(false);
  });

  test('1을 인자로 넘기면 false 를 반환한다', async () => {
    await expect(Numbers.isMoreThanMax(1)).toEqual(false);
  });

  test('최대값보다 작은 수를 인자로 넘기면 false 를 반환한다', async () => {
    await expect(Numbers.isMoreThanMax(5)).toEqual(false);
  });

  test('최대값을 인자로 넘기면 false 를 반환한다', async () => {
    await expect(Numbers.isMoreThanMax(9)).toEqual(false);
  });

  test('최대값보다 큰 수를 인자로 넘기면 true 를 반환한다', async () => {
    await expect(Numbers.isMoreThanMax(10)).toEqual(true);
  });
});

describe('numbers.isLessThanMin', () => {
  test('1을 인자로 넘기면 false 를 반환한다', async () => {
    await expect(Numbers.isLessThanMin(1)).toEqual(false);
  });

  test('최소값보다 큰 수를 인자로 넘기면 false 를 반환한다', async () => {
    await expect(Numbers.isLessThanMin(5)).toEqual(false);
  });

  test('0을 인자로 넘기면 true 를 반환한다', async () => {
    await expect(Numbers.isLessThanMin(0)).toEqual(true);
  });

  test('음수를 인자로 넘기면 true 를 반환한다', async () => {
    await expect(Numbers.isLessThanMin(-1)).toEqual(true);
  });
});