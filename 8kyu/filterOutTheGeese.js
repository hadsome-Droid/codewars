//todo                  Fiter Out The Geese

//*  Напишите функцию, которая принимает список строк в качестве аргумента и
//*  возвращает отфильтрованный список, содержащий те же элементы,
//*     но с удаленными "гусями".

//*     Гуси - это любые строки в следующем массиве, который предварительно
//*      заполнен в вашем решении:

//*  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
//*  Например, если этот массив был передан в качестве аргумента:

//*  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
//*  Ваша функция вернет следующий массив:

//*  ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
//*  Элементы в возвращаемом массиве должны располагаться в том же порядке, что
//*   и в исходном массиве, переданном вашей функции, хотя и с удалением "гусей".
//*   Обратите внимание, что все строки будут в том же регистре, что и
//*  предоставленные, и некоторые элементы могут повторяться.




function gooseFilter(birds) {
   let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
   let result = []

   for (let i = 0; i < birds.length; i++) {
      if (!geese.includes(birds[i])) {
         result.push(birds[i])
      }
   }
   return result
} 


console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))