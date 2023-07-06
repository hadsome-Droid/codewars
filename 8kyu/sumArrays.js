// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non - integer.
// If the array does not contain any numbers then you should return 0.

// Напишите функцию, которая принимает массив чисел и возвращает сумму чисел.
// Числа могут быть отрицательными или нецелочисленными.
// Если массив не содержит никаких чисел, то вы должны вернуть 0

const myArray = [1, 2.5, 3, 4, 0, -1 ]

const getSum = (arr) => {
   if (arr.length == 0) return 0
   let sum = arr.reduce((sum, current) => sum + current, 0)
   return sum
}

getSum(myArray)