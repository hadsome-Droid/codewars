// todo                       Training JS #26: methods of arrayObject---map()

//* Задача
//* Кодирование в функции isolateIt.функция принимает 1 параметр arr, это 
//* массив строк.Ваша задача - поместить символ "|" в середину каждого элемента.

//* Если длина строки является четным числом, используйте метод insert.например:
//* "abcd" должно стать "ab|cd". "|" должно быть вставлено между ab и cd.

//* Если длина строки равна нечетному числу, используйте метод замены.например:
//* "abcde" должно стать "ab|de".Символ c будет заменен на |.

//* Исходный массив изменять не следует, вам нужно вернуть новый
//* массив(если вы используете метод map, вам не нужно беспокоиться об этом).

//*    Пример
//* isolateIt(["abcd", "efgh"]) should return ["ab|cd", "ef|gh"]
//* isolateIt(["abcde", "fghij"]) should return ["ab|de", "fg|ij"]
//* isolateIt(["1234", "56789"]) should return ["12|34", "56|89"]

//* небольшой совет: гибкое использование slice() упростит работу.



function isolateIt(arr) {
   return arr.map(el => {
      if (el.length % 2 === 0) {
         return `${el.slice(0, el.length / 2)}|${el.slice(el.length / 2)}`
      } else {
         return `${el.slice(0, el.length / 2)}|${el.slice(el.length / 2 + 1)}`
      }
   })
}

console.log(isolateIt(["abrcd", "eftgh"]))