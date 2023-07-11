//# Напишите функцию, которая принимает целое число n и строку s 
//# в качестве параметров и возвращает строку из s, повторенную ровно n раз.


function repeatStr(n, s) {
   let str = ''
   let num = 0
   while (num < n) {
      str += s
      num++
   }
   return console.log(str);
}

repeatStr(5, '*')