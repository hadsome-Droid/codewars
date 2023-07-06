// DESCRIPTION:
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

//    Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
//    Examples: (Input-- > Output)

// 13 -- > "drink toddy"
// 17 -- > "drink coke"
// 18 -- > "drink beer"
// 20 -- > "drink beer"
// 30 -- > "drink whisky"


const drinkAbout = (age) => {
   if (age >= 21) {
      return console.log('drink whisky')
   }

   if (age >= 18 && age < 21) {
      return console.log('drink beer')
   }

   if (age >= 14 && age < 18) {
      return console.log('drink coke')
   }

   if (age < 14) {
      return console.log('drink toddy')
   }
}

drinkAbout(13)
drinkAbout(17)
drinkAbout(18)
drinkAbout(20)
drinkAbout(30)

