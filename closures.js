function createCounter() {
  let count = 0;        //private state 

  return {
    increment: function increment() {
      count++
    } ,
    getCount: function getCount() {
      return count
    }
  }
  

}


const counter = createCounter()
counter.increment()     //1
counter.increment()     //2
console.log(counter.getCount())


function calculator() {
  let memory = 0

  return function add(a,b) {
    memory = a + b
    return memory
  }
}

const myAdd = calculator()
console.log(myAdd(3,10))

//Not this, υπαρχει closer και επομενως οι inner functions
//εχουν προσβαση στο private state - outer state
//variables are private by default
// private and public API

function calculator2() {
  let memory = 0

  return{
    add : function (a,b) {
    memory = a + b
    return memory
  },
      sub: function (a,b) {
       memory = a - b
      return memory
      }
  } 
}

let calc = calculator2()
console.log(calc.add(5,6))
console.log(calc.sub(10,2))
