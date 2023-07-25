//todo                           Ones and Zeros


//& Учитывая массив единиц и нулей, преобразуйте эквивалентное двоичное
//& значение в целое число.

//& Например: [0, 0, 0, 1] обрабатывается как 0001, что является
//& двоичным представлением 1.




const binaryArrayToNumber = arr => {
   return parseInt(arr.join(''), 2)
};


console.log(binaryArrayToNumber([1, 1, 1, 1]))
console.log(binaryArrayToNumber([0, 1, 1, 1]))
console.log(binaryArrayToNumber([1, 0, 0, 1]))