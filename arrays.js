const arr1 = []
const arr2 = [1, 2, 3, 4, 5]
const arr3 = new Array(5).fill(0)           // [0, 0, 0, 0, 0] otherwise [undefined]

const arr =  [...arr2]               //spread operator gives a shallow copy 
 
//Array methods
console.log(arr1.length)
console.log(arr1[0])
console.log(arr2[arr2.length -1])
console.log(arr2.join(','))   //returns a string

//traverse
for(let i = 0; i < arr2.length;i++){
    console.log(arr2[i])
}

//for of
for(let item of arr2){
    console.log(item)
}

//
arr2.forEach((item, index ) => {
    console.log(`Value : ${item}, index: ${index}`)
})

//stack like operations LIFO
arr.push(12)
let popped = arr.pop()

//queue like operations     FIFO
arr.shift()             //returns and removes

//add to first position
arr.unshift(5)

//Slice
const sliced = arr.slice(1)
const sliced2 = arr.slice(1,3)      //start index - end Index -1
const sliced3 = arr.slice()         //shallow copy


//splice delete, insert, update
arr.splice(2, 1)        //index 2 , removes 1 element
arr.splice(2, 0, 3)      //insert 3 at index 2
arr.splice(2,1,1,5)      //at index 2 removes 2 el, and inserts 1 and 5 updating the array

let spliced = arr.slice.splice(2, 1)        //returns a new array 

//array includes
if(arr.includes(3)) {
    console.log("3 is included")
} else {
    console.log("3 is not included")
}

//index of  & lastindexOf
const index = arr.indexOf(5, 2);        
if(index === -1){
    console.log("Not found")
} else {
    console.log("Found")
}

// concat 
let myConcat = arr.concat(arr3)

//spread
let myconcat2 = [...arr, ...arr3]

//min val of an array
let minVal = Math.min(...arr)
let minIndex = arr.indexOf(minVal)

//max val
let maxVal = Math.max(...arr)
let maxIndex = arr.indexOf(maxVal)

//destructuring 
let grid = [1,2]
let [x,y] = grid            //x = 1, y = 2

let [first, second, ...rest] = arr;     //rest operator

function min(...arr) {          //rest operator
    return Math.min(...arr)     //spread operator
}

let minEl = min(1,2,3,4,5)

//arrays as collections
