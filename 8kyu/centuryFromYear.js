//todo                            Century From Year

//*  Вступление
//*  Первое столетие охватывает период с 1 - го по 100 - й год включительно,
//*     второе столетие - со 101 - го по 200 - й год включительно и т.д.

//*     Задача
//*  Учитывая год, верните век, в котором он находится.

function century(year) {
   return Math.ceil(year / 100)
}


console.log(century(2000))