//todo                       Two to One

//$ Возьмите 2 строки s1 и s2, содержащие только буквы от a до z.
//$ Возвращает новую отсортированную строку, максимально длинную
//$  из возможных, содержащую отдельные буквы - каждая берется
//$   только один раз - исходящие из s1 или s2.


function longest(s1, s2) {
   let result = new Set(s1.split('').concat(s2.split('')))
   return Array.from(result).sort().join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))