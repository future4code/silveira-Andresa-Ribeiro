//Exercício 1


//a.
function printNumber(n: number) {
    if (n >= 0) {
        printNumber(n-1)
        console.log(n)
    }
}

console.log("Exercício 1, letra a.")
printNumber(5)

//b.
function printNumber2(n: number) {
    if (n >= 0) {
        console.log(n)
        printNumber2(n-1)
    }
}

console.log("Exercício 1, letra b.")
printNumber2(5)

//Exercício 2


function numberSum(n: number, sum: number = 0): number {
    if (n === 0) {
        return sum
    }

    return numberSum(n - 1 , n + sum)
}

console.log("Exercício 2:")
console.log(numberSum(5))

//Exercício 3


function numberSum2(n: number): number {
    let sum = n
    for (let i = 0; i < n; i++) {
        sum = sum + i
    }

    return sum
}

console.log("Exercício 3:")
console.log(numberSum2(5))

//Exercício 4


function printArray(array: number[], i: number = array.length - 1) {
    if (i >= 0) {
        printArray(array, i - 1)
        console.log(`O elemento ${i} é:`, array[i])
    }
}

console.log("Exercício 4:")
printArray([20, 50, 5, 4, 10])