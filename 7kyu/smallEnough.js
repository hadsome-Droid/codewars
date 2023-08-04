// todo                                      Small enough?-Beginner

//* Вам будут присвоены array и limit значение.Вы должны проверить, что все значения
//*  в массиве ниже или равны предельному значению.Если это так, верните true.
//*  В противном случае вернитесь false.

//* Можно предположить, что все значения в массиве являются числами.


function smallEnough(a, limit) {
   let result = a.sort((a, b) => a - b)
   return result[result.length - 1] <= limit ? true : false
}


console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false)