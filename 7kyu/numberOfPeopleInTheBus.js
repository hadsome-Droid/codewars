const number = (busStops) => {
   let i = 0
   let countPerson = 0
   while (i < busStops.length) {
      let stop = busStops[i]
      let comeIn = stop[0]
      let exits = stop[1]
      countPerson += comeIn -= exits
      i++
   }

   return countPerson

}

console.log(number([[10, 0], [3, 5], [5, 8]]))
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]))
console.log(number([[0, 0]]))