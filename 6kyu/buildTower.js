//todo                               BuildTower

//*  Build Tower
//*  Постройте башню в форме пирамиды в виде массива / списка строк с заданным
//*   положительным целым числом number of floors.Блок башни
//*    представлен "*" символом.

//*     Например, башня с 3 этажами выглядит следующим образом:

//*  [
//*     "  *  ",
//*     " *** ",
//*     "*****"
//*  ]



function towerBuilder(nFloors) {
   let spase, star, tower = []
   let i = 0;
   while (i < nFloors) {
      i++
      spase = ' '.repeat(nFloors - i)
      star = '*'.repeat(2 * i - 1)
      tower.push(`${spase}${star}${spase}`)
   }
   return tower
}


console.log(towerBuilder(10))