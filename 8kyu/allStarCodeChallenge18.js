//todo         All Star Code Challenge #18

//* Создайте функцию, которая принимает строку и один символ и возвращает
//*  целое число от количества вхождений, второй аргумент которых
//*   содержится в первом.

//* Если не удается найти ни одного вхождения, должно быть возвращено значение 0.

//* ("Hello", "o") ==> 1
//* ("Hello", "l") ==> 2
//* ("", "z") ==> 0

function strCount(str, letter) {
   let count = 0
   for (let el of str) {
      if (el === letter) count++
   }
   return count
}


console.log(strCount('Hello', 'o'))