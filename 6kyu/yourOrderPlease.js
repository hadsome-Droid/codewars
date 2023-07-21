//todo                           Your order, please


//$ Ваша задача - отсортировать заданную строку.Каждое слово в строке будет 
//$ содержать одно число.Это число - позиция, которую должно
//$  занимать слово в результате.

//$  Примечание: Цифры могут быть от 1 до 9. Таким образом, 1 будет
//$   первым словом(а не 0).

//$ Если входная строка пуста, верните пустую строку.Слова во 
//$ входной строке будут содержать только допустимые последовательные числа.


function order(words) {
   let wordArr = words.split(' ')
   let result = []

   for (let i = 0; i < wordArr.length; i++) {
      let str = wordArr[i].replace(/[a-z]/gi, '')
      result.push([wordArr[i], parseInt(str)])
   }
   result.sort((a, b) => a[1] - b[1])

   return result.map(el => el.splice(0, 1)).join(' ')
}


console.log(order("is2 Thi1s T4est 3a"))
//  "Thi1s is2 3a T4est"