// todo                                     No zeros for heros

//* Числа, заканчивающиеся нулями, скучны.

//* Они могли бы быть забавными в вашем мире, но не здесь.

//* Избавьтесь от них.Только от конечных.

//* 1450 -> 145
//* 960000 -> 96
//* 1050 -> 105
//*    - 1050 -> -105
//* С одним Zero все в порядке, не беспокойтесь об этом.В любом случае, бедняга


function noBoringZeros(n) {
   return Number(String(n).replace(/0+$/g, ''))
}


console.log(noBoringZeros(960000), 96)
console.log(noBoringZeros(-1050), -105)
console.log(noBoringZeros(-105), -105)
console.log(noBoringZeros(1450), 145)