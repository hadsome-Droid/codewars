//todo                  Thinkful - Logic Drills: Traffic light 

//* Вы пишете код для управления светофорами в вашем городе.
//* Вам нужна функция для обработки каждого изменения цвета
//*  с зеленого на желтый, на красный, а затем снова на зеленый.

//* Завершите функцию, которая принимает строку в качестве аргумента,
//*    представляющую текущее состояние источника света, и возвращает
//* строку, представляющую состояние, в которое должен перейти
//*  источник света.

//*    Например, когда входные данные зеленые, выходные данные должны быть желтыми.

function updateLight(current) {
   switch (current) {
      case "green":
         return "yellow"
      case "yellow":
         return "red"
      case "red":
         return "green"
   }
}


console.log(updateLight("green"))
console.log(updateLight("yellow"))
console.log(updateLight("red"))