// todo                  Get the Middle Character


//* Вам будет дано слово.Ваша задача - вернуть средний символ в слове.
//* Если длина слова нечетная, верните средний символ.
//* Если длина слова четная, верните 2 средних символа.


//* #Examples:

//*  Kata.getMiddle("test") should return "es"

//*  Kata.getMiddle("testing") should return "t"

//*  Kata.getMiddle("middle") should return "dd"

//*  Kata.getMiddle("A") should return "A"


function getMiddle(s) {
   if (s.length <= 1) return s
   if (s.length % 2 === 0) {
      return s.slice(s.length / 2 - 1, s.length / 2 + 1)
   } else {
      return s.slice(s.length / 2, s.length / 2 + 1)
   }
}


console.log(getMiddle("testing"))