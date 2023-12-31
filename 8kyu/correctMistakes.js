//todo  Correct the mistakes of the character recognition software

//*  Программное обеспечение для распознавания символов широко используется для
//*   оцифровки печатных текстов.Таким образом, тексты можно редактировать,
//*     искать и сохранять на компьютере.

//*  Когда документы(особенно довольно старые, написанные на пишущей машинке)
//*  оцифровываются, программы распознавания символов часто допускают ошибки.

//*  Ваша задача - исправить ошибки в оцифрованном тексте.
//*  Вам нужно всего лишь обработать следующие ошибки:

//*  S неверно истолковывается как 5
//*  O неверно истолковывается как 0
//*  I неверно истолковывается как 1
//*  Тестовые примеры содержат числа только по ошибке.


function correct(string) {
   let err = { '0': 'O', '1': 'I', '5': 'S' }
   let result = ''
   for (let el of string) {
      let checkErr = /[015]/g
      if (checkErr.test(el)) {
         result += err[el]
      } else {
         result += el
      }
   }
   return result
}


console.log(correct("L0ND0N"), "LONDON")