//todo                                         Merge two sorted arrays into one

//* Вам предоставлены два отсортированных массива, оба из которых содержат только
//*  целые числа.Ваша задача - найти способ объединить их в один, отсортировав в 
//*  порядке возрастания.Завершите функцию mergeArrays(arr1, arr2), где arr1 и
//* arr2 - исходные отсортированные массивы.

//* Вам не нужно беспокоиться о проверке, поскольку arr1 и arr2 должны быть массивами
//*  с 0 или более целыми числами.Если оба arr1 и arr2 пусты, то просто верните
//*   пустой массив.

//* Примечание: arr1 и arr2 могут быть отсортированы в разных порядках.Также arr1
//* и arr2 могут иметь одинаковые целые числа.Удалите дубликаты в 
//* возвращаемом результате.

function mergeArrays(arr1, arr2) {
   return Array.from(new Set(arr1.concat(arr2).sort((a, b) => (a - b))));
}

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])