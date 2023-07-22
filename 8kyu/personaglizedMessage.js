// todo               Grasshopper - Personalized Message

//* Создайте функцию, которая выдает персонализированное приветствие.
//* Эта функция принимает два параметра: имя и владелец

function greet(name, owner) {
   if (name === owner) {
      return 'Hello boss'
   }
   return 'Hello guest'
}


console.log(greet('Daniel', 'Daniel'))