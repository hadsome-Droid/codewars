//todo                Odd or Even?

//* Задача:
//* Получив список целых чисел, определите, является ли сумма
//*  его элементов нечетной или четной.

//* Укажите свой ответ в виде строки, соответствующей "нечетному" или "четному".

//* Если входной массив пуст, рассматривайте его как: [0](массив с нулем).



function oddOrEven(array) {
   if (!array.length) { return 'even' }
   let evenOrOdd = array.reduce((a, b) => a + b) % 2
   return evenOrOdd === 0 ? 'even' : 'odd'
}




console.log(oddOrEven([0]))
console.log(oddOrEven([1]))
console.log(oddOrEven([]))