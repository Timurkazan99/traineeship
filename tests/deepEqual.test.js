import deepEqual from "../scripts/deepEqual";

const plainObject1 = { name: 'Alex', surname: 'Smith', age: 23, married: true };
const plainObject2 = { name: 'Nikita', surname: 'Doe', age: 17, married: false };
const nestedProperties1 = { partner: { id: 123 }, childrenIds: [ '234', '321'] };
const nestedProperties2 = { partner: { id: null }, childrenIds: [] };
const funcForObject1 = { getName() { return `${this.name} ${this.surname}` } };
const funcForObject2 = { setAge(newAge) { this.age = newAge } };

const cases = [
  {
    name: 'Пустые объекты',
    obj1: {},
    obj2: {},
    expected: true
  },
  {
    name: 'Одинаковые объекты',
    obj1: Object.assign({}, plainObject1),
    obj2: Object.assign({}, plainObject1),
    expected: true
  },
  {
    name: 'Одинаковые ссылки на объекты',
    obj1: plainObject1,
    obj2: plainObject1,
    expected: true
  },
  {
    name: 'Разные объекты',
    obj1: Object.assign({}, plainObject1),
    obj2: Object.assign({}, plainObject2),
    expected: false
  },
  {
    name: 'Одинаковые вложенные объекты',
    obj1: Object.assign({}, plainObject1, nestedProperties1),
    obj2: Object.assign({}, plainObject1, nestedProperties1),
    expected: true
  },
  {
    name: 'Разные вложенные объекты',
    obj1: Object.assign({}, plainObject1, nestedProperties1),
    obj2: Object.assign({}, plainObject2, nestedProperties2),
    expected: false
  },
  {
    name: 'Одинаковые объекты с функией',
    obj1: Object.assign({}, plainObject1, nestedProperties1, funcForObject1),
    obj2: Object.assign({}, plainObject1, nestedProperties1, funcForObject1),
    expected: true
  },
  {
    name: 'Разные объекты с функией',
    obj1: Object.assign({}, plainObject1, nestedProperties1, funcForObject1),
    obj2: Object.assign({}, plainObject2, nestedProperties2, funcForObject2),
    expected: false
  },
  {
    name: 'Одинаковые примитивы',
    obj1: 123,
    obj2: 123,
    expected: true
  },
  {
    name: 'Разные примитивы',
    obj1: '123',
    obj2: 123,
    expected: false
  }
]

describe('Проверка сравнений', function () {
  it.each(cases)(`$name`, function ({obj1, obj2, expected}) {
    expect(deepEqual(obj1, obj2)).toBe(expected);
  })
});

describe('Отсуствие мутаций', function () {
  it('Плоский объект', function () {
    const obj = Object.assign({}, plainObject1);
    const copyOfObj = Object.assign({}, obj);
    deepEqual(obj, obj);

    expect(obj).toStrictEqual(copyOfObj);
  });

  it('Вложенный объект', function () {
    const obj = Object.assign({}, plainObject1, nestedProperties1);
    const copyOfObj = Object.assign({}, obj, nestedProperties1);
    deepEqual(obj, obj);

    expect(obj).toStrictEqual(copyOfObj);
  });

  it('Объект с функцией', function () {
    const obj = Object.assign({}, plainObject1, funcForObject1);
    const copyOfObj = Object.assign({}, obj);
    deepEqual(obj, obj);

    expect(obj).toStrictEqual(copyOfObj);
    expect(obj.getName.toString()).toBe(copyOfObj.getName.toString());
  })
});