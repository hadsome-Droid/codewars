//todo                             What is Between?

//* Завершите функцию, которая принимает два целых числа(a, b, где a < b) и вернет
//*  массив всех целых чисел между входными параметрами, включая их.

//*    Например:

//* a = 1
//* b = 4
//* --> [1, 2, 3, 4]

function between(a, b) {
   let result = []
   while (a <= b) {
      result.push(a)
      a++
   }
   return result
}


console.log(between(-2, 2), [-2, -1, 0, 1, 2])