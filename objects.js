const point3D = new Object()
point3D.x = 5
point3D.y = 10
point3D.z = 20

const  user = {
    firstname : 'Alice',
    lastname : 'Wonderland'
}

const point = {
    x : 10,
    y : 20,
    showY() {
        return `${this.y}`
    }
}

console.log(point.x)
console.log(point['x'])

point.showX = function() {
    return `${this.x}`
}

for(let key in point3D) {
console.log(`${key}: ${point3D[key]}`)
}

for(const[key,value] of Object.entries(point3D)) {
    console.log(`${key} : ${value}`)
}

const cart = {
    items: [],
    addItem(item, price) {
        this.items.push( { item : item, price : price } )
    },
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price)
    }
}

cart.addItem('Milk', 2)
cart.addItem('Eggs', 5)
console.log(cart.calculateTotal())      // 7

// object destructuring
const {x : myX, y, z, t = 0} = point3D
console.log(`${x}, ${y}, ${z}`)

function display3DPoint(point) {
    console.log(`x : ${point.x}`)
    console.log(`y : ${point.y}`)
    console.log(`z : ${point.z}`)
}


//with destructuring
function display3DPoint2({x,y,z = 'Not provided'}) {
    console.log(`x : ${x}`)
    console.log(`y : ${y}`)
    console.log(`z : ${z}`)

}


