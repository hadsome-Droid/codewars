//# Рассмотрим массив / список овец, в котором некоторые овцы могут
//#  отсутствовать на своем месте.Нам нужна функция, которая 
//#  подсчитывает количество овец, присутствующих
//#   в массиве(true означает "присутствует").

//$ Подсказка: Не забудьте проверить наличие неверных значений,
//$    таких как null / undefined

var array1 = [true, true, true, false,
   true, true, true, true,
   true, false, true, false,
   true, false, false, true,
   true, true, true, true,
   false, false, true, true];



function countSheeps(arr) {
   let shepp = 0
   for (let i = 0; i < arr.length; i++){
      if (arr[i]) {
      shepp++
      }
   }
   return shepp
}

countSheeps(array1)