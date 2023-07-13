//# Ваша задача состоит в том, чтобы создать функцию,
//# которая выполняет четыре основные математические операции: ( +, -, *, /)

function basicOp(operation, value1, value2) {

   let sum = 0
   switch (operation) {
      case '+':
         sum += value1 + value2
         break
      case '-':
         sum += value1 - value2
         break
      case '*':
         sum += value1 * value2
         break
      case '/':
         sum += value1 / value2
         break
      default:
         'This is not corect sumbol'
   }
   return sum
}

console.log(basicOp('+', 4, 7))
console.log(basicOp('-', 15, 18))
console.log(basicOp('*', 5, 5))
console.log(basicOp('/', 49, 7))