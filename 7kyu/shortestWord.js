//                                                         Shortest Word

// Простой, учитывая строку слов, возвращает длину самого короткого слова (ов).
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

function findShort(s){
    let result = s.split(' ').sort((a, b) => a.length - b.length)
    return result[0].length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3)