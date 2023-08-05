//todo                                   Removing Elements

//*  Возьмите массив и удалите каждый второй элемент из массива.
//*  Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.

//*     Пример:
//*  ["Keep", "Remove", "Keep", "Remove", "Keep", ...]-- > ["Keep", "Keep", "Keep", ...]

//*  Ни один из массивов не будет пустым, так что вам не нужно беспокоиться об этом!


function removeEveryOther(arr) {
   return arr.filter((_, index) => index % 2 === 0)
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again'])