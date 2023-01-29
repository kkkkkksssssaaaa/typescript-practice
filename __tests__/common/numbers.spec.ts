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

describe('numbers.getRandomOne', () => {
  const runningCount: number = 100;

  test('1부터 9까지의 랜덤한 숫자를 얻을 수 있다', async () => {
    await expect(() => Numbers.getRandomOne()).not.toThrow();
  });

  test('호출로 얻은 함수는 1보다 크다', async () => {
    for (let i: number = 0; i < runningCount; i++) {
      let randomOne = Numbers.getRandomOne();
      await expect(Numbers.isLessThanMin(randomOne)).toBeFalsy();
    }
  })
});
