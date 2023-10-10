//todo                                 Stringy Strings

// напишите мне функцию, stringy которая принимает size и возвращает string чередующиеся 1s и 0s.
//
//     строка должна начинаться с 1.
//
// строка с size 6 должна возвращать :'101010'.
//
//     с size 4 должно вернуться : '1010'.
//
//     с size 12 должно вернуться : '101010101010'.
//
//     Размер всегда будет положительным и будет использовать только целые числа.


function stringy(size) {
    let result = ''
    for (let i = 0; i < size; i++){
        if(!(i %  2)) {
            result += '1'
        }else{
            result += '0'
        }
    }
    return result
}

// function stringy(size) {
//     return ''.padStart(size, '10')
// }

console.log(stringy(6))