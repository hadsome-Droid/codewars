//todo                         Sum of positive

//*  Вы получаете массив чисел, возвращаете сумму всех положительных значений
//*     Пример[1, -4, 7, 12] => 1 + 7 + 12 = 20
//*  Примечание: если нечего суммировать, сумма по умолчанию равна 0.


function positiveSum(arr) {
   let sum = 0
   if (!arr.length) {
      return sum
   }
   for (let el of arr) {
      if (el > 0) {
         sum += el
      }
   }
   return sum
}


console.log(positiveSum([-1, 2, 3, 4, -5]))