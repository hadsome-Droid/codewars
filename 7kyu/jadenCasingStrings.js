//todo                   Jaden Casing Strings


//# Джейден Смит, сын Уилла Смита, является звездой таких фильмов,
//# как "Малыш-каратист"(2010) и "После земли"(2013).Джейден также
//# известен своей философией, которую он излагает через Twitter.
//# Когда он пишет в Twitter, он известен тем, что почти всегда
//# выделяет каждое слово с заглавной буквы

let str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
   let wordArr = this.split(' ')

   const wordUp = (word) => {
      return word = word[0].toUpperCase() + word.slice(1)
   }

   for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i][0]) {
         wordArr[i] = wordUp(wordArr[i])
      }
   }
   return wordArr.join(' ')
};


console.log(str.toJadenCase())