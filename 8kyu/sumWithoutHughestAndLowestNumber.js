//todo          Sum without highest and lowest number

//*  Суммируйте все числа данного массива(cq.list), за исключением самого 
//*  высокого и самого низкого элемента(по значению, а не по индексу!).

//*  Самый высокий или самый низкий элемент соответственно - это один элемент
//*   на каждом ребре, даже если существует более одного элемента
//*    с одинаковым значением.

//*  Следите за проверкой входных данных.


function sumArray(array) {
   if (!array || array.length <= 2) return 0
   let sortArr = [...array].sort((a, b) => a - b).slice(1, array.length - 1)
   return sortArr.reduce((a, b) => a + b, 0)
}

console.log(sumArray([-6, 20, -1, 10, -12]))