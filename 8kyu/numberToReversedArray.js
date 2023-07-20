//todo                Convert number to reversed array of digit

//#  Преобразовать число в обратный массив цифр
//#  Учитывая случайное неотрицательное число, вы должны вернуть 
//#  цифры этого числа в массиве в обратном порядке.

function digitize(n) {
   let sum = Array.from(String(n), Number)
   return sum.reverse()
}

console.log(digitize(35231))