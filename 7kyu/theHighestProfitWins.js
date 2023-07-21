//todo                     The highest profit wins!

//#  Задача
//#  Напишите функцию, которая возвращает как минимальное, так и максимальное 
//#  число из заданного списка / массива.


function minMax(arr) {
   return Array.of(Math.min(...arr), Math.max(...arr))
}

console.log(minMax([1, 2, 3, 4, 5]))