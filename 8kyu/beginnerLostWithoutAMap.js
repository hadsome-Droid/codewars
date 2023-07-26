//todo                   Beginner - Lost Without a Map

//$ Учитывая массив целых чисел, верните новый массив, в котором каждое
//$  значение удваивается.

//$    Например:

//$ [1, 2, 3]-- > [2, 4, 6]

function maps(x) {
   return x.map(el => el * 2)
}


console.log(maps([1, 2, 3]))