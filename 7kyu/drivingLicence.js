//todo                        Driving Licence

//* Задача
//* Водительский номер в Великобритании составляется на основе личных данных водителя.
//* Отдельные буквы и цифры можно закодировать, используя приведенную ниже информацию

//* Правила
//* 1 - 5: Первые пять символов фамилии(дополняются цифрами 9, если меньше 5 символов)

//* 6: Цифра десятилетия от года рождения(например, для 1987 года это было бы 8)

//* 7 - 8: Месяц рождения(7 - й символ увеличивается на 5, если водитель - женщина,
//*    т.е. 51 - 62 вместо 01 - 12)
//* 9 - 10: Дата в пределах месяца рождения

//* 11: Цифра года от года рождения(например, для 1987 года это было бы 7)

//* 12 - 13: Первые два инициала имени и отчества, дополненные цифрой 9,
//*    если второго имени нет

//* 14: Произвольная цифра – обычно 9, но уменьшенная, чтобы различать драйверы с
//*  первыми 13 общими символами.Мы всегда будем использовать 9

//* 15 - 16: Две контрольные цифры компьютера.Мы всегда будем использовать "AA".

//* Ваша задача - закодировать номер водительского удостоверения в Великобритании,
//*    используя массив данных.Массив будет выглядеть следующим образом

let data = ["Andrew", "Robert", "Lee", "02-September-1981", "M"]

function checkSurname(surname, arr) {
   let length = surname.length
   let up = surname.toUpperCase()
   if (length >= 5) {
      return arr.unshift(up.slice(0, 5))
   } else if (length == 4) {
      arr.unshift(up + 9)
   } else if (length == 3) {
      arr.unshift(up + 99)
   } else if (length == 2) {
      arr.unshift(up + 999)
   } else if (length == 1) {
      arr.unshift(up + 9999)
   } else {
      arr.unshift(99999)
   }
}

function getDate(data, gender) {
   let dateArr = data.replace(/-/g, ' ').split(' ')
   let decade = dateArr[2].slice(dateArr[2].length / 2, -1)
   let monthBirth = ''
   let dayBirth = dateArr[0]
   let yearFigure = dateArr[2].slice(-1)

   if (gender == 'F') {
      monthBirth = `0${(new Date(data).getMonth() + 1 + 50)}`.slice(-2)
   } else {
      monthBirth = `0${(new Date(data).getMonth() + 1)}`.slice(-2)
   }
   return [decade, monthBirth, dayBirth, yearFigure]
}

function initialsName(initials, arr) {
   if (initials[1]) {
      return arr.unshift(initials.join('').replace(/[a-z]/g, ''))
   } else {
      return arr.unshift(initials.join('').replace(/[a-z]/g, '') + '9')
   }

}

function driver(data) {
   let surname = data[2]
   let dateBirth = data[3]
   let gender = data[4]
   let initials = [data[0], data[1]]

   let result = [9, "AA"]
   initialsName(initials, result)
   let pipec = getDate(dateBirth, gender).reverse()
   for (let i = 0; i < pipec.length; i++) {
      result.unshift(pipec[i])
   }

   checkSurname(surname, result)

   return result.join('')
}

console.log(driver(data))