//todo                                    Abbreviate a Two Word Name

//* Напишите функцию для преобразования имени в инициалы.Это ката состоит строго из 
//* двух слов с одним пробелом между ними.

//* Вывод должен состоять из двух заглавных букв с разделяющей их точкой.

//* Это должно выглядеть примерно так:

//* Sam Harris => S.H

//* patrick feeney => P.F

function abbrevName(name) {
   let upper = name.toUpperCase().split(' ')
   return `${upper[0].slice(0, 1)}.${upper[1].slice(0, 1)}`
}

console.log(abbrevName("Sam Harris"), "S.H");