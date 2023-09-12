import reverseStr from "../scripts/reverseStr.js";

const cases = [
  {
    name: 'Пустая строка',
    str: '',
    expected: ''
  },
  {
    name: 'Строка',
    str: 'Съешь мягких булочек',
    expected: 'кечолуб хикгям ьшеъС'
  }
]

describe('Проверка работы', function () {
  it.each(cases)('$name', function ({str, expected}) {
    expect(reverseStr(str)).toBe(expected);
  })
})