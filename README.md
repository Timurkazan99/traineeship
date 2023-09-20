## Домашняя работа №4

### Задание №1
Какие бывают алгоритмы сортировок?

- Пузырьковая.
- Сортировка вставками
- Сортировка Шелла
- Сортировка выбором
- Быстрая сортировка
- Сортировка слиянием
- Timsort
- Сортировка кучей
- Плавная сортировка
- Терпеливая сортировка
- Сортировка с помощью бинарного дерева
- Карманная сортировка
- Цифровая сортировка
- Сортировка подсчетом
- Сортировка Хэна
- Многопоточная сортировка слиянием
- PSRS-сортировка

### Задание №2
Прочитать про "Операторы и выражения, циклы в JS"

- Арифметические
  - Сложение `+`
  - Вычитание `-`
  - Умножение `*`
  - Деление `/`
  - Взятие остатка от деления `%`
  - Возведение в степень `**`
  - Инкремент `++`
  - Декремент `--`
- Побитовые
  - AND `&`
  - OR `|`
  - XOR `^`
  - NOT `~`
  - Побитовый сдвиг в лево `<<`
  - Побитовый сдвиг в право `>>`
  - Правый сдвиг с заполнением нулями `>>>`
- Запятая `,`
- Сравнение
  - Больше `>`
  - Меньше `<`
  - Больше или равно `>=`
  - Меньше или равно `<=`
  - Равно `==`
  - Равно с приведением типов `===`
- Ветвление
  - If `if() {} else {}`
  - Тернарный оператор `expression ? then : else`
- Логические операторы
  - AND `&&`
  - OR `||`
  - NOT `!`
- Операторы нулевого слияния и присваивания
  - Оператор нулевого слияния `??`
  - Оператор нулевого присваивания `??=`
- Циклы
  - For `for(let i = 0; i < max; i += 1)`
  - For in `for(let key in user)`
  - For of `for(let fruit of fruits)`
  - While `while(condition)`
  - Do while `do {} while(condition)`
  - Прерывание цикла `break`
  - Переход к следующей итерации `continue`
- Конструкция "switch"
  ```
  switch(x) {
    case 'value1':  // if (x === 'value1')
    ...
      [break]
  
    case 'value2':  // if (x === 'value2')
    ...
      [break]
  
    default:
    ...
      [break]
  }
  ```

### Задание №3
Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.

- `__proto__`
  ```
  const Person = {};
  const Person2 = {};
  Person2.__proto__ = Person;
- `Object.create`
  ```
  const Person = Object.create({});
  const Person2 = Object.create(Person);
- `Object.setPrototypeOf`
  ```
  const Person = Object.assign({});
  const Person2 = Object.assign({});
  Object.setPrototypeOf(Person2, Person);

```
Object.prototype.logInfo = function () {}
```
  
### Задание №4
Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

```
class PersonThree extend Person {
  PersonThree(name) {
    super();
    this.name = name;
  }
  
  set name(newName) {
    this.name = newName;
  }
  
  get name() {
    return this.name;
  }
}
```

### Задание №5
Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

[![Tests](https://github.com/Timurkazan99/traineeship/actions/workflows/tests.yml/badge.svg?branch=homeWork_04&event=push)](https://github.com/Timurkazan99/traineeship/actions/workflows/tests.yml)

```
function firstSum(arr, total) {
  for (let i = 0; i < arr.length - 1; i += 1) { // Цикл для прохождения по всем элементам.
    for (let k = 1 + i; k < arr.length; k += 1) { // Цикл для прохождения по элементам кроме тех которые уже были в первом цикле
      if (arr[i] + arr[k] === total) { // Условие прерывание
        return [arr[i], arr[k]] // Возвращаем элементы, которые удовлетворяют условию
      }
    }
  }

  return []; // 
}
```

### Задание №6
Какая сложность у вашего алгоритма?

Количество операций можно высчитать по формуле N<sub>0</sub> + N<sub>1</sub>... + N<sub>n</sub>, где каждое слагаемое представляет произведение количества операций в теле вложенного цикла и количество итераций этого цикла. Для данного случая это будет арифметическая прогрессия от количества элементов массива минус один, до 1, с шагом -1. Сумму находим по формуле суммы первых n членов прогресси, это будет `S = (N^2 - N) / 2`. Судя по этой функции количество операций будет расти квадратично, что соотвествует сложности `O(N^2)`.