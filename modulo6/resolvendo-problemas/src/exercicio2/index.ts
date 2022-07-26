const compressionAndCountString = (string: string) => {
    
    const lettersWord = []
    let lastLetter = string[0]
    let count = 0

    for (const character of string) {
        if (character !== lastLetter) {
            lettersWord.push(lastLetter + count)
            lastLetter = character
            count = 0
        }
        count = count + 1
    }

    lettersWord.push(lastLetter + count)

    let result = ""
    for (let character of lettersWord) {
        result = result + character
    }


    return result.length > string.length ? string : result
}

console.log(compressionAndCountString("hellooooooo"))
console.log(compressionAndCountString("hello"))
console.log(compressionAndCountString("hellllllllllllo"))
console.log(compressionAndCountString("heeeeeeello"))