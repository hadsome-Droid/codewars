//todo                             Mumbling 


//*  На этот раз никакой истории, никакой теории.
//*  Приведенные ниже примеры показывают, как написать функцию accum:

//*  Примеры:
//*  accum("abcd") -> "A-Bb-Ccc-Dddd"
//*  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//*  accum("cwAt") -> "C-Ww-Aaa-Tttt"
//*  Параметр accum представляет собой строку, которая включает только буквы из a..z и A..Z.


function accum(s) {
   let spl = s.toLowerCase().split('')
   let str = []
   let i = 0
   while (i < spl.length) {
      let j = 0
      let el = spl[i].toUpperCase()
      while (j < i) {
         el += spl[i]
         j++
      }
      str.push(el)
      i++
   }
   return str.join('-')
}


console.log(accum("ZpglnRxqenU"))