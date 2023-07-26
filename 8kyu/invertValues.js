//todo                            Invert values

//*  Учитывая набор чисел, верните аддитивную обратную величину к каждому из них.
//*  Каждое положительное значение становится отрицательным,
//*  а отрицательные значения становятся положительными.

function invert(array) {
   return array.map(el => {
      if (el > 0) {
         return -Math.abs(el)
      } else {
         return Math.abs(el)
      }
   })
}



console.log(invert([1, 2, 3, 4, 5]))
console.log(invert([1, -2, 3, -4, 5]))