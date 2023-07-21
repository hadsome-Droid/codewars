//todo                         List Filtering


//* В этом ката вы создадите функцию, которая принимает список
//* неотрицательных целых чисел и строк и возвращает новый
//* список с отфильтрованными строками


function filter_list(l) {
   return l.filter((el) => typeof el === 'number')
}

console.log(filter_list([1, 2, 'a', 'b']))