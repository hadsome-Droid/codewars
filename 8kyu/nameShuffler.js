// todo                                  Name Shuffler

//*  Напишите функцию, которая возвращает строку, в которой имя заменяется фамилией.

//*     Пример(Ввод -> Вывод)

//*  "john McClane" -- > "McClane john"


function nameShuffler(str) {
   return str.split(' ').reverse().join(' ')
}

console.log(nameShuffler('john McClane'), 'McClane john')