const numbers = [1,2,3,4]

//mutable 
numbers.push(5)
numbers.splice(3,0,5)

// Immutable - Fresh copy  -- Insert
const addToArrayEnd = (arr, num) => {
    return [...numbers, num]
}

const addToArrayFirst = (arr, num) => {
    return [num, ...numbers]
}

// add to index
const addToArrayAt = (arr, num, index) => {
    return [...numbers.slice(0, index), num, ...numbers.slice(index)] //
}

//Update mutable 
numbers.splice(3,0,8)

//Immutable
const updateOne = (arr, index, newVal) => {
    arr.map((val, index) => (i === index) ? newVal : val)  //like a for loop checking every index
}

//Mutable delete
let index = numbers.indexOf(1)
if(index !== -1) numbers.splice(index, 1)

//Immutable delete
const removeFromArray = (arr, num) => {
    arr.filter(item => n !== num )
}