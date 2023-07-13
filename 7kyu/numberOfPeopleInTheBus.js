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