//todo                   Calculate average

//# Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.
//# Примечание: Пустые массивы должны возвращать 0.

function findAverage(array) {
   let numbers = [...array]
   let sum = 0

   if (numbers.length > 0) {
      sum = numbers.reduce((el, acc) => {
         return acc += el
      }, 0) / numbers.length
   }
   return sum
}


console.log(findAverage([1, 2, 3, 4]))