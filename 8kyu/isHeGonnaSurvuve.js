// todo                                  Is he gonna survive?


//* Герой направляется к замку, чтобы завершить свою миссию.Однако ему сказали,
//* что замок окружен парой могущественных драконов! для победы над кажды
//* драконом требуется 2 пули, наш герой понятия не имеет, сколько пуль он
//*  должен нести..Если предположить, что он возьмет определенное количество
//*   пуль и двинется вперед, чтобы сразиться с другим определенным количеством
//* драконов, выживет ли он ?

//*    Верните true, если да, false в противном случае:)

function hero(bullets, dragons) {
   return bullets - dragons * 2 >= 0;
}


console.log(hero(100, 40))