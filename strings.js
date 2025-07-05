let str = "Coding Factory"

console.log(...str)     //  gives char one by one with 

let s1 = str.substring(1, 5) //odin
let s2 = str.slice(1, 5) // odin
let s3 = str.slice(-5) // tory


//split
let tokens = str.split(" ") // ['Coding' 'Factory']
let tokens2 = str.split(/\s+/)  //RegEx

//strings are char arrays
console.log(str.charAt(0))
let index = str.indexOf('o')        //1
let index2 = str.lastIndexOf('o')  //11
if(index !== -1) {
    console.log(`Found at ${index}`)
} else {
    console.log("Not found")
}

//equality
let str1 = "Athens"
let str2 = "Athens" 
if(str1 === str2){
    console.log("Equal")
} else {
    console.log("Not equal")
}

//case insensitive
if(str1.toUpperCase === str2.toUpperCase){
    console.log("Equal")
} else {
    console.log("Not equal")
}

//trim
let aString = "    Coding"
let trimmed = aString.trim()

//concat with + and .concat
let concatenated = str1 + str2 + aString

//regex
let strInput = "hello all"
if(/hello/i.test(strInput)){                      //regex.test()  i is ignore case
    console.log("match found")
} else {
    console.log("Match not found")
}

let manyTokens = 'world watch hello'
const regex = /w\w+/g                          //g is global flag, checks  string for all matches and returns them to an array
let matches = manyTokens.match(regex)       // ['world', 'watch']


//exec is the same but returns one by one
let match
while((match = regex.exec(manyTokens)) !== null) {
    console.log(`Found '${match[0]}' at index ${match.index}`)
}

function isStrongPassword(password){
    return /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[\w_])^.{8,}$/.test(password)
}
