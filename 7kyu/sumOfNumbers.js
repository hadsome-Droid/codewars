//todo                Beginner Series #3 Sum of Numbers



//$ Учитывая два целых числа a и b, которые могут быть положительными
//$  или отрицательными, найдите сумму всех целых чисел между ними и
//$   включая их, и верните ее.Если два числа равны, верните a или b.

//$    Примечание: a и b не упорядочены!


function getSum(a, b) {
   let min = Math.min(a, b)
   let max = Math.max(a, b)
   let result = 0

   for (let i = min; i <= max; i++) {
      result += i
   }

   return result
}

console.log(getSum(0, -1))
console.log(getSum(0, 1))
console.log(getSum(2, 2))
console.log(getSum(3, 2))