//                             Add Length

// Что, если нам нужно добавить длину слов, разделенных пробелом, в конце этого же слова и вернуть его в виде массива?
//
//     Пример (Ввод -> Вывод)
//
//     "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Ваша задача - написать функцию, которая принимает строку и возвращает массив / список с длиной каждого слова,
//     добавленного к каждому элементу.
//
//     Примечание: Строка будет содержать по крайней мере один элемент; слова всегда будут разделяться пробелом.

function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
}

console.log(addLength('apple ban'))