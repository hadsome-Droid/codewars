// todo                      Cat years, Dog years

//*  Задание на Ката
//*  У меня есть кошка и собака.

//*  Я получил их одновременно с котенком / щенком.Это было humanYears лет назад.

//*  Возвращайте их соответствующие возрасты теперь как[humanYears, catYears, dogYears]

//*  Примечания:

//*  Человеческие годы >= 1
//*  Человеческие годы - это только целые числа
//*  Кошачьи годы
//*  15 кошачьи годы для первого года
//*  + 9 кошачьи годы на второй год
//*  + 4 годы кошки за каждый последующий год
//*  Собачьи годы
//*  15 годы собаки в течение первого года
//*  + 9 годы собаки на второй год
//*  + 5 годы собаки за каждый последующий го

const humanYearsCatYearsDogYears = function (humanYears) {
   let catYears = 0
   let dogYears = 0

   if (humanYears === 1) {
      catYears += 15
      dogYears += 15
   } else if (humanYears >= 2) {
      catYears += 24
      dogYears += 24
      let i = 0
      while (i < humanYears - 2) {
         catYears += 4
         dogYears += 5
         i++
      }
   }
   return [humanYears, catYears, dogYears];
}

console.log(humanYearsCatYearsDogYears(3))