//* Напишите функцию findNeedle(), которая принимает массив,
//*    полный мусора, но содержащий одну "иглу".

//* После того, как ваша функция найдет иглу,
//*    она должна вернуть сообщение(в виде строки), в котором говорится:

//* "найдена игла в нужном положении" плюс индекс,
//*    по которому была найдена игла, так что:

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54];

function findNeedle(haystack) {
   let el = haystack.find(item => item === 'needle')
   if (el === 'needle') {
      let indexNeedle = haystack.findIndex(item => item === 'needle')
      return `found the needle at position ${indexNeedle}`
   }
}

findNeedle(haystack_1)
