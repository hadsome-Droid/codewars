//todo               Sum of two lowest positive integers


//*  Создайте функцию, которая возвращает сумму двух наименьших 
//*  положительных чисел, заданных массивом минимум из 4 натуральных чисел.
//*  Никакие числа с плавающей запятой или неположительные целые
//*   числа передаваться не будут.

//*     Например, когда массив передается следующим
//*  образом[19, 5, 42, 2, 77], результат должен быть равен 7

function sumTwoSmallestNumbers(numbers) {
   let result = numbers.sort((a, b) => a - b).slice(0, 2);
   return result[0] + result[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))