//todo                              Persistent Bugger.



//* Напишите функцию, persistence, которая принимает положительный параметр num
//* и возвращает его мультипликативную персистентность, то есть количество раз,
//* которое вы должны перемножить цифрыnum, пока не получите однозначную цифру.

//*    Например(Ввод -> Вывод):

//* 39 -- > 3(because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 and 4 has only one digit)
//* 999 -- > 4(because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2)
//* 4 -- > 0(because 4 is already a one - digit number)


function persistence(num) {
   let numStr = String(num)
   let count = 0
   while (numStr.length > 1) {
      numStr = String(numStr.split('').reduce((acc, el) => acc * el))
      count++
   }
   return count
}

console.log(persistence(39), 3)