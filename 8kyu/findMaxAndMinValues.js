//# Ваша задача состоит в том, чтобы создать две функции(max и min, или maximum и minimum
//# и т.д., в зависимости от языка), которые получают список целых чисел в качестве
//# входных данных и возвращают наибольшее и наименьшее число в этом списке соответственно.

const min = function (list) {
   let min = list[0]
   for (let num of list) {
      if (min > num) {
         min = num
      }
   }
   return console.log(min);
}

const max = function (list) {
   let max = list[0]
   for (let num of list) {
      if (max < num) {
         max = num
      }
   }
   return console.log(max);
}


min([-52, 56, 30, 29, -54, 0, -110])
min([4, 6, 2, 1, 9, 63, -134, 566])
console.log('---------=======----------')
max([-52, 56, 30, 29, -54, 0, -110])
max([4, 6, 2, 1, 9, 63, -134, 566])