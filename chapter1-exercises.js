const arr = ['Athens', 'London','Paris']
arr.push('Berlin')
console.log(arr)

const name1 = 'Petros'
console.log(name1)

num1 = 1
num2 = 2
console.log(num1 + num2)

const isTrue = true
console.log(isTrue ? "It's true" : "It's not true!")

const user = {
  name : 'Petros',
  age : '31',
  city : 'Athens',
  hello() {
    console.log(`Hello ${this.name}`)
  }
}
console.log(user.name, user.age, user.city)
user.hello()

const circleArea = r => Math.PI * r ** 2;
console.log(circleArea(5).toFixed(2));

function getUniqueValues(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

function arrToChunks(arr, size) {
  const chunks = [];
  for(let i = 0; i < arr.lenght; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function commonElements(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item))
}