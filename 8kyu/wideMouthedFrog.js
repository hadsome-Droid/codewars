// todo                                         The Wide-Mouthed frog!

// Широкозубая лягушка особенно интересуется пищевыми привычками других существ.
//
//     Он просто не может перестать спрашивать встречных существ, что они любят есть. Но затем он встречает аллигатора, который просто ОБОЖАЕТ есть широкогубых лягушек!
//
//     Когда он встречается с аллигатором, у него появляется крошечный рот.
//
//     Ваша цель в этом ката - создать complete the mouth_size метод этот метод принимает один аргумент animal , который соответствует животному, с которым столкнулась лягушка. Если это параметр alligator (без учета регистра) return small в противном случае return wide.

function mouthSize(animal) {
    let result = animal.toLowerCase()
    if(result === 'alligator'){
        return 'small'
    }
    return 'wide'
}

console.log(mouthSize("ant bear"),"wide")