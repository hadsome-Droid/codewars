//todo                          Simple multiplication

//$ Это ката о умножении заданного числа на восемь, если оно четное,
//$    и на девять в противном случае.

function simpleMultiplication(number) {
   return number % 2 === 0 ? number * 8 : number * 9;
}

simpleMultiplication(2)