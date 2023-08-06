// todo                 Grasshopper - Terminal game combat function

//* Создайте боевую функцию, которая забирает текущее здоровье игрока и количество
//*  полученного урона, а также возвращает игроку новое здоровье.Уровень здоровья
//*   не может быть меньше 0.

function combat(health, damage) {
   let result = health - damage
   return result <= 0 ? 0 : result
}

console.log(combat(100, 40))