//todo                          Reverse words

//$ Завершите функцию, которая принимает строковый параметр, и
//$ переверните каждое слово в строке.Все пробелы в строке должны быть сохранены.

function reverseWords(str) {
   let strArr = str.split(' ')
   let reversArr = ''

   for (let i = 0; i < strArr.length; i++) {
      reversArr += strArr[i].split('').reverse().join('') + ' '
   }

   return reversArr.trim()
}

console.log((reverseWords('The quick brown fox jumps over the lazy dog.')))