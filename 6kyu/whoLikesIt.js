//todo                         Who likes it?


//* Вы, вероятно, знакомы с системой "нравится" на Facebook и других страницах.
//* Люди могут "лайкать" записи в блоге, фотографии или другие материалы.
//* Мы хотим создать текст, который должен отображаться рядом с таким элементом.

//* Реализуйте функцию, которая принимает массив, содержащий имена людей,
//* которым нравится тот или иной товар.Он должен возвращать 
//* отображаемый текст, как показано в примерах


function likes(names) {
   if (names.length <= 0) {
      return 'no one likes this'
   }

   switch (names.length) {
      case 1:
         return `${names[0]} likes this`
      case 2:
         return `${names[0]} and ${names[1]} like this`
      case 3:
         return `${names[0]}, ${names[1]} and ${names[2]} like this`
      default:
         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
   }

}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))