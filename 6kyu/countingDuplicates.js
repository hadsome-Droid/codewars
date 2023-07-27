//todo                      Counting Duplicates

//*  Напишите функцию, которая вернет количество различных буквенных символов
//*   без учета регистра и цифровых разрядов, которые встречаются более одного
//*    раза во входной строке.Можно предположить, что строка ввода содержит
//*   только алфавиты(как в верхнем, так и в нижнем регистре) и цифровые разряды.

//*  "abcde" -> 0 # no characters repeats more than once
//*  "aabbcde" -> 2 # 'a' and 'b'
//*  "aabBcde" -> 2 # 'a' occurs twice and 'b' twice(`b` and`B`)
//*  "indivisibility" -> 1 # 'i' occurs six times
//*  "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//*  "aA11" -> 2 # 'a' and '1'
//*  "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
   let arr = text.toLowerCase().split('')
   let result = []
   for (let el of arr) {
      if (arr.indexOf(el) != arr.lastIndexOf(el)) {
         result.push(el)
      }
   }
   return new Set(result).size
}

console.log(duplicateCount("Indivisibilities"))