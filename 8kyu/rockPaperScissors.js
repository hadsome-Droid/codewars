//todo                        Rock Paper Scissors!


//*   Камень, ножницы, бумага
//*   Давайте играть! Вы должны вернуть, какой игрок выиграл!
//*   В случае ничьей вернитесьDraw!.

//*   Примеры(Ввод1, Ввод2-- > Вывод):

//*   "scissors", "paper" -- > "Player 1 won!"
//*   "scissors", "rock" -- > "Player 2 won!"
//*   "paper", "paper" -- > "Draw!"


const getPoint = (str) => {
   switch (str) {
      case "scissors": return 1;
      case "paper": return 2;
      case "rock": return 3;
   }
}

const rps = (p1, p2) => {
   let winner = getPoint(p1) - getPoint(p2);
   if (winner == -1 || winner == 2) {
      return "Player 1 won!";
   }
   if (winner === 0) {
      return "Draw!";
   }
   return "Player 2 won!";
};


console.log(rps('scissors', 'paper'))