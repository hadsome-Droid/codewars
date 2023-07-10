//* Создайте функцию, которая возвращает
//*  массив целых чисел от n до 1, где n > 0.

//* Пример: n = 5 -- > [5, 4, 3, 2, 1]

const reverseSeq = n => {
   if (n < 1) {
      return []
   } else {
      const countArray = reverseSeq(n - 1)
      countArray.unshift(n)
      return countArray
   }
}