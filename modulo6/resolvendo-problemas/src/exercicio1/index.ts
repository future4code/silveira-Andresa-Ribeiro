const stringIsOneEdit = (stringA: string, stringB: string): boolean => {

    if (Math.abs(stringA.length - stringB.length) > 1) {
        return false
    }

    if (stringA.length > stringB.length) {
        return stringA.includes(stringB)
    }
    
    if (stringB.length > stringA.length) {
        return stringB.includes(stringA)
    }

    let differentsCharactersQuantity = 0

    for (let i = 0; i < stringA.length; i++) {
        if (stringA[i] !== stringB[i]) {
            differentsCharactersQuantity = differentsCharactersQuantity + 1
        }
    }

    return differentsCharactersQuantity === 1
}


console.log(stringIsOneEdit("butcher", "butcher"))
console.log(stringIsOneEdit("hughi", "hughie"))
console.log(stringIsOneEdit("starlight", "starlightt"))
console.log(stringIsOneEdit("homelander", "romelander"))