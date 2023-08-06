//todo                                     Super Duper Easy

//* Создайте функцию, которая возвращает значение, умноженное на 50 и увеличенное на 6.
//*  Если введенное значение является строкой, оно должно возвращать "Ошибка".

function problem(x) {
   return typeof x === 'string' ? 'Error' : (x * 50) + 6;
}

console.log(problem(5))