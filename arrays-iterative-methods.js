const students = ['Νίκη', 'Ανδρέας', 'Γιάννης']

students.forEach(function(stu){
    console.log(stu)
})

students.forEach(function(stu, index, arr){
    console.log(index, stu, arr)
})

students.forEach((val, index) => {
    console.log(index, val)
})

students.forEach(function(stu, _, arr){
    console.log(stu, arr)
})

//filter
let filtered = students.filter(stu => stu === 'Γιάννης')

const users = [
    {firstname : "Ανδρέας", age: 25, active: true, email: 'andre@gmail.com'},
    {firstname : "Νίκη", age: 25, active: true, email: 'niki20@gmail.com'}
]

const activeUsers = users.filter(u => a.active == true)     //returns the whole user that is active
console.log(activeUsers)

const emails = users.map(user => user.email)            //(brings only the emails, not the whole user ['andrew@gmail.com', 'niki@gmail.com']

const numbers = [1,2,3,4,5]
let sum = numbers.reduce((total, value) => total + value, 0)
let avg = numbers.reduce((total, value) => total + value, 0) / numbers.length

const findIndexes = (arr, num) => {
    arr.reduce((indexes, el, index) => (el === num) ? [...indexes, index] : indexes, [])
}