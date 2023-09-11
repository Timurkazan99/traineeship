## Домашняя работа №2

### Задание №1
Создать объект `counter` всеми возможными способами.

1. Литеральное объявление
    ```
    const counter = {};
2. С помощью `new`
    ```
    function Counter() {}; // Функция конструктор
    const counter = new Counter(); // Создание объект класса Counter
3. C помощью `Object.create`
    ```
    const counter = Object.create({});
4. C помощью `Object.asign`
    ```
    const counter = Object.asign({});
5. С помощью `Object.fromEntries`
    ```
    const counter = Object.fromEntries([]);
6. С помощью `JSON.parse`
    ```
    const counter = JSON.parse('{}');
6. С помощью `eval`
    ```
    const counter = eval(
      '(function() { return {} }())' // Самовызывающая функция, котора возравшает объект
    );
    ```

### Задание №2
Скопировать объект `counter` всеми возможными способами.

1. C помощью `Object.asign`
    ```
    const copyOfCounter = Object.asign(copyOfCounter, counter);
2. С помощью `Object.fromEntries`
    ```
    const copyOfCounter = Object.fromEntries(Object.entries(counter));
3. С помощью спред оператора
    ```
    const copyOfCounter = {...counter};
4. С помощью `JSON.parse`
    ```
    const copyOfCounter = JSON.stringify(JSON.parse(counter));
    ```

### Задание №3
Создать функцию `makeCounter` всеми описанными и возможными способами.

1. Объявляемая функция (function declaration)
   ```
   function makeCounter() {};
2. Функциональное выражение (function expression)
   ```
   const makeCounter = function () {};
3. Стрелочная функция (arrow function, ES6)
   ```
   const makeCounter = () => {};
4. Именованное функциональное выражение (named function expression, NFE)
   ```
   const makeCounter = function createCounter() {};
5. С помощью функции высшего порядка (higher-order functions)
   ```
   const createMakeCounter = () => () => {};
   const makeCounter = createMakeCounter();
   ```

### Задание №4
Развернуть строку в обратном направлении при помощи методов массивов.
```
function reverseStr(str) {
   return str
      .split('') // Разделяем строку на массив символов
      .reverse() // Затем массив разворачиваем
      .join(); // И снова объединяем массив в строку
}
```

### Задание №5
Написать функцию глубокого сравнения двух объектов.
```
function isObject(obj) { // Функция для определения является передаваемое значение объектом
  return typeof obj === 'object' && obj !== null;
}

function deepEqual(obj1, obj2) {
  if(!isObject(obj1) || !isObject(obj2)) { // Если один из аргументов не объект, то идет прямое сравнение значений
    return (
      (obj1.toString() == obj2.toString()) && // Приводится к строке, потому что все примитивы имеют этот метод и функции могут быть приведенны этому типу
      (typeof obj1 == typeof obj2) // Проверяем одинаковые ли типы у аргументов
    );
  }

  const keys = Object.keys(obj2); // Если оба объекта равны, то второй набор ключей не нужен
  const keysLengthOfObj2 = Object.keys(obj2).length; // От второго объекта нужен только количество свойств

  if(keysLengthOfObj2 !== keys.length) { // Если количество свойств отличаютя, то и объекты не равны
    return false
  }

  for (const key of keys) { // Так как нам нужно только найти отличающиеся свойство, поэтому нужно найти первое отличие и выйти из цикла
    if(!deepEqual(obj1[key], obj2[key])) return false; // Вызовем нашу функцию для свойств, и они будут сравнены по логике описанной выше
  }

  return true; // Если всё вложенные свойства равны, то возращется истина
}
```
