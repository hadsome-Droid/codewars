//todo                        The Vowel Code

//* Шаг 1: Создайте вызываемую encode() функцию для замены всех строчных гласных в 
//* заданной строке числами в соответствии со следующим шаблоном:

//* a -> 1
//* e -> 2
//* i -> 3
//* o -> 4
//* u -> 5
//* Например, encode("hello") вернет "h2ll4".В этом ката нет необходимости
//*  беспокоиться о гласных в верхнем регистре.

//*  Шаг 2: Теперь создайте вызываемую decode() функцию для преобразовани
//* я чисел обратно в гласные в соответствии с тем же шаблоном, показанным выше.

//* Например, decode("h3 th2r2") вернул бы "hi there".

//* Для простоты можно предположить, что любые числа, передаваемые в функцию,
//*    будут соответствовать гласным




let vowel = {
   'a': '1',
   '1': 'a',
   'e': '2',
   '2': 'e',
   'i': '3',
   '3': 'i',
   'o': '4',
   '4': 'o',
   'u': '5',
   '5': 'u',
}

function encode(string) {
   // let strArr
   let result = ''
   for (let el of string) {
      let tot = /[aeiou]/i;
      if (tot.test(el)) {
         result += vowel[el]
      } else {
         result += el
      }
   }
   return result
}

function decode(string) {
   let result = ''
   for (let el of string) {
      let tot = /[12345]/i;
      if (tot.test(el)) {
         result += vowel[el]
      } else {
         result += el
      }
   }
   return result
}