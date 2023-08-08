//todo                                         A wolf in sheep's clothing

//* Если волк - ближайшее к вам животное, вернитесь "Pls go away and stop eating my sheep".
//* В противном случае вернитесь, "Oi! Sheep number N! You are about to be eaten by a wolf!"
//*  где N находится позиция овцы в очереди.

//*    Примечание: в массиве всегда будет ровно один волк.

//*       Примеры
//* Ввод: ["sheep", "sheep", "sheep", "wolf", "sheep"]
//* Результат: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

//* Ввод: ["sheep", "sheep", "wolf"]
//* Результат: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
   
   let positionWolf = [...queue].reverse().indexOf('wolf')

   if (positionWolf === 0) return "Pls go away and stop eating my sheep"

   return `Oi! Sheep number ${positionWolf}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))