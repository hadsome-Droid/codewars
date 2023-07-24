//todo                               Break Camel Case 

//*  Завершите решение так, чтобы функция разбивала верблюжью оболочку, используя пробел между словами.

//*     Пример
//*  "camelCasing"  => "camel Casing"
//*  "identifier"   => "identifier"
//*  ""             => ""


function solution(string) {
   let word = ''

   for (let el of string) {
      if (el === el.toUpperCase()) {
         word += ' '
         word += el
      } else {
         word += el
      }
   }
   return word
}

console.log(solution('camelCasingTest'))