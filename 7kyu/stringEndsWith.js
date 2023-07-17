//# Завершите решение так, чтобы оно возвращало значение true,
//#  если первый переданный аргумент(строка) заканчивается
//# 2 - м аргументом(также строкой).

function solution(str, ending) {
   let dot = str.slice(str.length - ending.length)
   let arrDot = dot.split()
   let arrEnding = ending.split()


   for (let el of arrEnding) {

      if (arrDot.indexOf(el) === -1) {
         return false
      }
   }
   return true
}

console.log(solution('sumo', 'omo'))