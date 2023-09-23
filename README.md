## Домашняя работа №1

### Задание №1
Написать порядок и вывод в консоли.

```
let promiseTwo = new Promise((resolve, reject) => {
   resolve("a"); 
});

promiseTwo
.then((res) => {
   return res + "b"; // res = 'a', возващает 'ab'
})
.then((res) => {
   return res + "с"; // res = 'ab', возващает 'abc'
})
.finally((res) => {
   return res + "!!!!!!!"; // finally пропускается, он ничего не принимает и не возвращает. 
})
.catch((res) => {
   return res + "d"; // catch пропускается, так как ниодин then выше не вернул reject 
})
.then((res) => {
   console.log(res); // будет выведено 'abc'
});
```

### Задание №2
Написать порядок и вывод в консоли.

```
function doSmth() {
   return Promise.resolve("123");
}

doSmth()
.then(function (a) {
   console.log("1", a); // выведется '123'
   return a;
})
.then(function (b) {
   console.log("2", b); // выведется '123'
   return Promise.reject("321");
})
.catch(function (err) {
   console.log("3", err); // выведется '321'
})
.then(function (c) {
   console.log("4", c); // выведется '321'
return c;
});
```

### Задание №3
Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.

[![Tests](https://github.com/Timurkazan99/traineeship/actions/workflows/tests.yml/badge.svg?branch=homeWork_05&event=push)](https://github.com/Timurkazan99/traineeship/actions/workflows/tests.yml)

```
function arrDelayLog(arr) {
  arr.forEach((el, i) => {
    setTimeout(() => {
      console.log('value:', el, 'index', i);
    });
  }, 3000);
}
```

### Задание №4
Прочитать про Top Level Await (можно ли использовать await вне функции async)

### Задание №5
Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
Promise с содержимым страницы или вызывает reject

[![Tests](https://github.com/Timurkazan99/traineeship/actions/workflows/tests.yml/badge.svg?branch=homeWork_05&event=push)](https://github.com/Timurkazan99/traineeship/actions/workflows/tests.yml)

```
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const fetchWithCatch = async (attempt) => { // Создаем функцию с повторяющейся логикой
      try {
        resolve(await fetch(url)) // Ожидаем ответ на запрос, если успешен, то резольвим промис и идем дальше
      } catch (error) { 
        if(attempt < 4) { // Проверяем номер попытки, если меньше 4, то пытаемся ещё раз, иначе режектим промис и идем дальше
          await fetchWithCatch(attempt + 1) // Повторяем попытку
        } else {
          reject(error) // Возращаем ошибку
        }
      }
    };

    fetchWithCatch(0); // Выпоняем первую попытку
  })
}
```