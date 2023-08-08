// todo                                         Grasshopper - Grade book

//* Учебник для школьников
//* Завершите работу функции, чтобы она нашла среднее значение из трех переданных ей
//*  баллов и вернула буквенное значение, связанное с этой оценкой.

//* Числовой балл	Буквенная оценка
//* 90 <= баллов <= 100	"А"
//* 80 <= оценка < 90	"B"
//* 70 <= оценка < 80	"C"
//* 60 <= оценка < 70	"D"
//* 0 <= оценка < 60	"F"
//* Все проверенные значения находятся в диапазоне от 0 до 100. Нет необходимости 
//* проверять наличие отрицательных значений или значений, превышающих

function getGrade(s1, s2, s3) {
   let result = Math.floor((s1 + s2 + s3) / 3)
   switch (true) {
      case result < 60:
         return 'F'
      case result < 70:
         return 'D'
      case result < 80:
         return 'C'
      case result < 90:
         return 'B'
      case result > 90:
         return 'A'
   }
}


console.log(getGrade(95, 90, 93))
console.log(getGrade(70, 70, 100))
console.log(getGrade(70, 70, 70))
console.log(getGrade(65, 70, 59))
console.log(getGrade(44, 55, 52))