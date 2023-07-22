//todo                        Friend or Foe?


//*  Создайте программу, которая фильтрует список строк и
//*  возвращает список, содержащий только имена ваших друзей.

//*  Если в имени ровно 4 буквы, вы можете быть уверены, что
//*  это должен быть ваш друг! В противном случае, вы можете
//*   быть уверены, что это не так...

//* Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends) {
   return friends.filter(el => {
      let reg = /[a-z]/gi
      return reg.test(el) && el.length === 4
   })
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))