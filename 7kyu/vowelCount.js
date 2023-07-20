//todo                          Vowel Count


//# Возвращает количество(count) гласных в данной строке.
//# Мы будем рассматривать a, e, i, o, u в качестве 
//# гласных для этого ката(но не y).
//# Входная строка будет состоять только из строчных букв и / или пробелов.

function getCount(str) {
   let vowel = 'aeiou'.split('')
   let countVowel = 0

   for (let i = 0; i < str.length; i++) {
      if (vowel.indexOf(str[i]) != -1) {
         countVowel++
      }
   }
   return countVowel;
}


console.log(getCount("abracadabra"))