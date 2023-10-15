// todo                                Double Char

// Получив строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.
//
// Примеры (Ввод -> Вывод):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    let strArr = str.split('')
    return strArr.map((elem)=> elem + elem).join('')
}

console.log(doubleChar("Adidas"), "AAddiiddaass")