//* Чтобы быть старшим, участнику должно быть не менее 55 лет и его гандикап должен
//*  превышать 7 баллов.В этом крокетном клубе гандикап варьируется от - 2 до + 26; чем
//*  лучше игрок, тем меньше гандикап.

//*    Ввод
//* Входные данные будут состоять из списка пар.Каждая пара содержит информацию для
//* одного потенциального участника.Информация состоит из целого числа, обозначающего
//*  возраст человека, и целого числа, обозначающего его инвалидность.

//*    Выход
//* Выходные данные будут состоять из списка строковых значений(в Haskell и C: Open или
//*  Senior), указывающих, следует ли поместить соответствующий элемент
//*  в категорию senior или open.

// input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
   return data.map(el => {
      if (el[0] >= 55 && el[1] > 7) {
         return 'Senior'
      } else {
         return 'Open'
      }
   })
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))
console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]))