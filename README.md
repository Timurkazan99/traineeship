## Домашняя работа №1

### Задание №1

Почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие?

В отличии классического представления массива, размер списка динамический и заранее не задан, элементы колекции могут иметь разные типы.

Массивы в JS имеют методы сразу нескольких структур:
- ##### Массив (Array)
  1. Получение элемента по заданному индексу `array[index]`
  2. Вставка элемента по заданному индексу `Array.prototype.splice()`
  3. Удаление элемента по заданному индексу `Array.prototype.splice()`
  4. Определение размера массива `array.length`
- ##### Стек (Stack)
  1. Добавление элемента в стек `Array.prototype.push()`
  2. Изъятие элемента из стека `Array.prototype.pop()`
  3. Получение верхнего элемента из стека без его удаления `array[array.length - 1]`
  4. Определение на пустоту `Arr.length === 0`
- ##### Очередь (Queue)
  1. Вставка элемента в конец очереди `Array.prototype.push()`
  2. Удаление элемента из начала очереди `Array.prototype.shift()`
  3. Получение первого элемента очереди без его удаление `Arr[0]`
  4. Определить, является ли очередь пустой `Arr.length === 0`
- #### Связанный список (Linked list)
  1. Добавление элемента в конец `Array.prototype.push()`
  2. Добавление элемента в начало `Array.prototype.unshift()`
  3. Удаление всех элементов с заданным значением `(value) => Array.prototype.filter((el) => el !== value)`
  4. Поиск элемента по значению `(value) => Array.prototype.find((el) => el === value)`
 
### Задание №2

Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

- Через `bind`
    ```
    const newContext = { item: 'some value' }
    const bindedLogger = logger.bind(newContext);
- Через `call`
    ```
    const newContext = { item: 'some value' }
    const bindedLogger = (message) => logger.call(newContext, message);
- Через `apply`
    ```
    const newContext = { item: 'some value' }
    const bindedLogger = (message) => logger.apply(newContext, [message]);
    ```

### Задание №3

Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

[![Tests](https://github.com/Timurkazan99/traineeship/actions/workflows/tests.yml/badge.svg?branch=homeWork_03&event=push)](https://github.com/Timurkazan99/traineeship/actions/workflows/tests.yml)
```
function myBind (
  func, // Функция которую нужно привязать к новому контексту
  newContext, // Сам контекст
  ...arg // Аргументы функции
) {
  return function (...newArgs) { // Новые аргументы которые будут использоваться в результирующей функции
    return func.call( // Привязываем контекст с помощью call
      newContext, // Контекст который будет использоваться
      ...arg, // Приоритетные аргументы, они замыкаются и их нельзя будет перезаписать 
      ...newArgs // Аргументы которые могут изменяться в зависимости от передаваемых значений
    );
  };
}
```

В результате мы получаем новую функцию с замкнутыми аргументами и контекстом. Как и в изначальном методе перепривязка контекста не сработает, так как в новой функции не используется контекст, так и аргументы нельзя переопределить, так как они замкнуты.