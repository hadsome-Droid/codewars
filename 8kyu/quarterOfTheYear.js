//todo                     Quarter of the year

//* Учитывая месяц в виде целого числа от 1 до 12, верните, к
//*  какому кварталу года он относится, в виде целого числа.

//* Например: месяц 2(февраль) является частью первого квартала;
//* месяц 6(июнь) является частью второго квартала;
//*  и месяц 11(ноябрь) является частью четвертого квартала.

const quarterOf = (month) => {
   if (month >= 1 && month <= 3) { return 1 }

   if (month >= 4 && month <= 6) { return 2 }

   if (month >= 7 && month <= 9) { return 3 }

   if (month >= 10 && month <= 12) { return 4 }

}


console.log(quarterOf(3))