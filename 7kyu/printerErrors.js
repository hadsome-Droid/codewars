//todo                       Printer Errors

//$  На фабрике принтер печатает этикетки для коробок.Для одного вида коробок
//$  принтер должен использовать цвета, которые для простоты обозначаются
//$  буквами от а до м.

//$  Цвета, используемые принтером, записываются в управляющую строку.
//$  Например, "хорошей" управляющей строкой будет aaabbbbhaijjjm,
//$  что означает, что принтер трижды использовал цвет a, четыре
//$  раза цвет b, один раз цвет h, затем один раз цвет a...

//$  Иногда возникают проблемы: отсутствие цветов, техническая
//$  неисправность и выводится "плохая" управляющая строка,
//$  например, aaaxbbbyyhwawiwjjjwwm с буквами не от a до m.

//$  Вы должны написать функцию printer_error, которая при заданной
//$  строке вернет частоту ошибок принтера в виде строки, представляющей
//$  рациональное число, числителем которого является количество ошибок,
//$  а знаменателем - длина управляющей строки.Не сводите эту дробь
//$  к более простому выражению.

//$  Строка имеет длину, большую или равную единице, и
//$  содержит только буквы от ato z.


let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"

function printerError(s) {
   let fault = s.replace(/[a-m]/gi, '').length
   return `${fault}/${s.length}`
}


console.log(printerError(s))