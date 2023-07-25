//todo                                    Even or Odd 

//* Создайте функцию, которая принимает целое число в качестве аргумента и 
//* возвращает "Четное" для четных чисел или "Нечетное" для нечетных чисел.

function evenOrOdd(number) {
   let result = number % 2
   return result === 0 ? 'Even' : 'Odd'
}

console.log(evenOrOdd(7))