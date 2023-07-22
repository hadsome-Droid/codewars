//todo                     Square(n) Sum


//* Завершите функцию square sum таким образом, чтобы она возводила в
//*  квадрат каждое переданное в нее число, а затем суммировала результаты вместе.

function squareSum(numbers) {
   return numbers.reduce((a, b) => a + (b ** 2), 0)
}

console.log(squareSum([1, 2]), 5)
