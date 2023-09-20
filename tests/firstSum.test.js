import firstSum from "../scripts/firstSum.js";

const cases = [
  {
    name: 'Пустой массив',
    arr: [],
    total: 6,
    expected: []
  },
  {
    name: '1 элемент',
    arr: [1],
    total: 3,
    expected: []
  },
  {
    name: 'Одна пара удовлетворяет условию',
    arr: [1, 4, 3, 2],
    total: 6,
    expected: [4, 2]
  },
  {
    name: 'Несколько пар удовлетворяют условию',
    arr: [2, 3, 4, 1],
    total: 5,
    expected: [2, 3]
  }
]

describe('Проверка firstSum', function () {
  it.each(cases)(`$name`, function ({arr, total, expected}) {
    expect(firstSum(arr, total)).toStrictEqual(expected);
  });

  it('Плоский объект', function () {
    const arr = [1, 2, 3]
    const copyOfArray = [...arr];
    firstSum(arr, 3);
    expect(arr).toStrictEqual(copyOfArray);
  });
});
