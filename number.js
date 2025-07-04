if(Number.isInteger(42)) {
    console.log('42 is an integer');
} else {
    console.log('42 is not an integer');
}

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

let aNum = 10 / "hello";
if(Number.isNaN(aNum)) {
    console.log("aNum is Nan");
} else {
    console.log("aNum ius not NaN");
}

console.log((5/3).toFixed(2)); // "1.67"
console.log(Math.ceil(5/4)); // 2 we get the 
console.log(Math.floor(5/4)); // 1 we get the integer
