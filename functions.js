//keywrod function
function sayHello(name) {
    return 'Hello ${name}'
}

// function expression
const add = function(a,b) {
    return a + b
}

// arrow function
const mul = (a, b) => a * b

function createDate(day = 1, month = 1, year = 2025) {
    return `${day}/${month}/${year}`
}

createDate()
createDate(5,10,1980)
createDate(9)
createDate(6,12)

// Rest

function max(...rest) {
    let maxVal = -Infinity

    for(let n of rest) {
        if (n > maxVal) maxVal = n
    }
    return maxVal
}
max(1,2,3,4,5)