//todo                Count of positives / sum of negatives


//*  Задан массив целых чисел.

//*  Возвращает массив, где первый элемент - это количество положительных чисел,
//*     а второй элемент - сумма отрицательных чисел. 0 не является ни
//*  положительным, ни отрицательным.

//*  Если входные данные представляют собой пустой массив или имеют 
//*  значение null, верните пустой массив


function countPositivesSumNegatives(input) {
   let result = [0, 0]
   if (!input || !input.length) {
      return []
   }

   input.forEach(el => {
      if (el > 0) {
         result[0]++
      } else {
         result[1] += el
      }
   })
   return result
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))