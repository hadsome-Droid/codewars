// todo                                          Find the capitals

//*  Инструкции
//*  Напишите функцию, которая принимает единственную строку(word) в качестве аргумента.
//*  Функция должна возвращать упорядоченный список, содержащий индексы всех 
//*  заглавных букв в строке.

//*     Пример(Ввод -> Вывод)
//*  "CodEWaRs" -- > [0, 3, 4, 6]

const capitals = function (word) {
   let result = []

   for (let i = 0; i < word.length; i++) {
      if (/[A-Z]/g.test(word[i])) result.push(i)
   }
   return result
};


console.log(capitals('CodEWaRs'), [0, 3, 4, 6])