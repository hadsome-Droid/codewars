//todo                             Descending Order

//#  Ваша задача состоит в том, чтобы создать функцию, которая может принимать
//#   любое неотрицательное целое число в качестве аргумента и возвращать его
//#    с цифрами в порядке убывания.По сути, переставьте цифры таким образом,
//#     чтобы получилось максимально возможное число.

//#     Примеры:
//#  Вход: 42145 Выход: 54421

//#  Вход: 145263 Выход: 654321

//#  Вход: 123456789 Выход: 987654321

function descendingOrder(n) {
   let num = String(n).split('').map(Number).sort().reverse()
   return +num.join('')
}

console.log(descendingOrder(1021))