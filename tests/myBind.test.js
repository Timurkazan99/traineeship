import myBind from "../scripts/myBind.js";

const user1 = { name: 'Alex' };
const user2 = { name: 'Alice' };
const getName = function () {
  return this.name;
};
const getFullName = function (surname) {
  return `${this.name} ${surname}`;
}

const cases = [
  {
    name: 'Функция без аргументов',
    newContext: {...user1},
    func: getName,
    args: null,
    newArgs: null,
    expected: user1.name
  },
  {
    name: 'Функция с левым аргументом',
    newContext: {...user1},
    func: getName,
    args: ['Sasha'],
    newArgs: null,
    expected: user1.name
  },
  {
    name: 'Функция с левым новым аргументом',
    newContext: {...user2},
    func: getName,
    args: null,
    newArgs: ['Alisa'],
    expected: user2.name
  },
  {
    name: 'Функция с левыми аргументами',
    newContext: {...user1},
    func: getName,
    args: ['Sanek'],
    newArgs: ['Sasha'],
    expected: user1.name
  },
  {
    name: 'Функция c аргументами',
    newContext: {...user2},
    func: getFullName,
    args: null,
    newArgs: ['Smith'],
    expected: `${user2.name} Smith`
  },
  {
    name: 'Функция c замкнутым аргументом',
    newContext: {...user1},
    func: getFullName,
    args: ['Doe'],
    newArgs: ['Smith'],
    expected: `${user1.name} Doe`
  },
  {
    name: 'Функция c замкнутым аргументом и левым',
    newContext: {...user1},
    func: getFullName,
    args: ['Doe', 'Jhonson'],
    newArgs: null,
    expected: `${user1.name} Doe`
  },
  {
    name: 'Функция c замкнутым аргументом и новым левым',
    newContext: {...user1},
    func: getFullName,
    args: ['Doe'],
    newArgs: ['Jhonson', 'Dre'],
    expected: `${user1.name} Doe`
  }
];

const mutationCases = [
  {
    name: 'Функция без аргументов',
    func: getName,
    args: null,
    newArgs: null
  },
  {
    name: 'Функция с аргументами',
    func: getFullName,
    args: null,
    newArgs: ['Musk']
  },
  {
    name: 'Функция с аргументами и замыканием',
    func: getFullName,
    args: ['Freeman'],
    newArgs: ['Musk']
  },
]

describe('Привязка контекста', function () {
  it.each(cases)(`$name`, function (event) {
    const {
      newContext,
      func,
      args,
      newArgs,
      expected
    } = event;

    const bindedFunc = args ? myBind(func, newContext, ...args) : myBind(func, newContext);
    const result = newArgs ? bindedFunc(newArgs) : bindedFunc();
    expect(result).toEqual(expected);
  });
});

describe('Отсуствие мутаций при повторном вызове', function () {
  it.each(mutationCases)(`$name`, function ({func, args, newArgs}) {
    const bindedFunc = args ? myBind(func, user1, ...args) : myBind(func, user1);
    const doubleBindedFunc = args ? myBind(bindedFunc, user2, 'Taylor') : myBind(bindedFunc, user2);
    const result = newArgs ? doubleBindedFunc(...newArgs) : doubleBindedFunc();
    const expected = newArgs ? bindedFunc(...newArgs) : bindedFunc();
    expect(result).toEqual(expected);
  });
});