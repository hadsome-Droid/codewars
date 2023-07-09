//* Вы получаете массив с результатами тестов ваших коллег.
//* Теперь рассчитайте среднее значение и сравните свой результат!

//* Верните True, если вам лучше, иначе False!

//* Примечание:
//* Ваши баллы не включены в массив баллов вашего класса.
//* Для вычисления среднего балла вы можете добавить свой балл в данный массив!
const classPoint = [2, 45, 23, 33, 10, 59]

function betterThanAverage(classPoints, yourPoints) {
   let arr = [...classPoints, yourPoints]
   let averageValue = arr.reduce((el, acc) => acc += el, 0) / arr.length
   return (yourPoints > averageValue) ? true : false
}

console.log(betterThanAverage(classPoint, 14))
console.log(betterThanAverage(classPoint, 78))
console.log(betterThanAverage(classPoint, 25.5))
