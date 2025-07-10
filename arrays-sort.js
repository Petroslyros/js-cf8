const arr = [1,8,5,3]

arr.sort((a, b) => a  - b)

const arr2 = ['Νίκη', 'Ανδρέας']
arr2.sort((a,b) => a.localeCompare(b, "el")) // if a > b return 

const users = [{firstname : 'Ανδρέας', age : 25, } ,{firstname: 'Νίκη', age: 20}]
users.sort((a,b) => a.age - b.age)              // sort by age asc
users.sort(function(a,b) {
    if(a.age === b.age) {
        return a.firstname.localeCompare(b.firstname, "el")
    }
    return a.age - b.age
})