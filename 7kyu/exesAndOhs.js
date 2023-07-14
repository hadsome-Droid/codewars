//* Проверьте, содержит ли строка одинаковое количество "x" и "o".
//* Метод должен возвращать логическое значение и быть нечувствительным
//* к регистру.Строка может содержать любой символ


function XO(str) {
   let xCount = []
   let oCount = []

   for (let el of str.toLowerCase()) {

      if (el === 'x') {
         xCount.push(el)
      } else if (el === 'o') {
         oCount.push(el)
      }
   }

   if (xCount.length === oCount.length) {
      return true
   } else {
      return false
   }
}

XO("xxOo")
XO("xo")
XO("xxxm")
XO("Oo")
XO("ooom")