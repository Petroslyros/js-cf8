// Currency formater

const formatCurrency = (amount) => {
    if(!Number.isFinite(amount)) return "Invalid Amount";
    return `${amount.toFixed(2)}`
}

console.log(formatCurrency(12.23456))           // 12.35
console.log(formatCurrency(Infinity))           // false

//safe devision

const safeDiv = (a, b) => {
    a = a ?? 0;   // nullish coalescing 
    b = b ?? 1;

    return (b === 0) ? Infinity : a / b;
}

console.log(safeDiv(10,2))
console.log(safeDiv(10,0))
console.log(null, 2)

// random hex color generator
const getRandomHexColor = () => {
    const color = Math.floor(Math.random() * (0XFFFFFF + 1)).toString(16).padStart(6 , '0')
    return `#${color}`
}
console.log(getRandomHexColor())