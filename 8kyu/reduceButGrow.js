//todo                   Beginner - Reduce but Grow

//* Учитывая непустой массив целых чисел, верните результат
//*  умножения значений по порядку.Пример:

//* [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
   return x.reduce((sum, el) => { return sum * el })
}

console.log(grow([1, 2, 3]))