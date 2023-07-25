// todo                       Remove the minimum



//$  Задача
//$  Учитывая массив целых чисел, удалите наименьшее значение.
//$  Не изменяйте исходный массив / список.Если есть несколько
//$  элементов с одинаковым значением, удалите тот, у которого
//$  индекс ниже.Если вы получаете пустой массив / список,
//$  верните пустой массив / список.
//$ Не меняйте порядок оставшихся элементов.

function removeSmallest(numbers) {
   let arrNumbers = [...numbers]
   let minNum = Math.min(...arrNumbers)
   let resultArr = []
   let count = 0
   for (let i = 0; i < arrNumbers.length; i++) {

      if (minNum < arrNumbers[i]) {
         resultArr.push(arrNumbers[i])
      } else {
         count++
         if (count > 1) {
            arrNumbers.lastIndexOf(i) === arrNumbers.indexOf(i)
               ? resultArr.push(arrNumbers[i])
               : ''
         }
      }
   }

   return resultArr;
}

console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([5, 3, 2, 1, 4]))
console.log(removeSmallest([2, 2, 1, 2, 1]))