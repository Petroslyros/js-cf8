//reverse string
function reverseString (str) {
    // return str.split("").reverseString.join("")
    return [...str].reverse().join("")
}

console.log(reverseString("hello"))

//replace a string with obfuscation sybmol (a > @, e > 3, i > !, o > 0, s > $)
function obfuscation(password) {
    return password.replace(/a/gi, '@')
            .replace(/e/gi, '3')
            .replace(/i/gi, '!')
            .replace(/o/gi, '0')
            .replace(/s/gi, '$')
}

// aaaabbbbcccca -> a4b3c3a
function compress(str) {

    let compressed = ''
    let count = 1

    for(let i = 0; i < str.length -1; i++){
        if(str.charAt(i) === str.charAt(i+1)) {
            count++
        } else {
            compressed += str.charAt(i) + (count > 1 ? count : '')
            count = 1
        }
    }
    return compressed
}
console.log(compress('aaaabbbbcccca'))
