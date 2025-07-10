//remove duplicates
const arr = [1,1,1,2,2,3,3,3]

function removeDuplicates(arr){
    const unique = []
    for(const item of arr){
        if(unique.indexOf(item) === -1) unique.push(item)
    }
    return unique;
}
console.log(removeDuplicates(arr))

//array chunks 
function chunkArray(arr, size) {
    const chunks = []

    for(let i = 0; i < arr.length; i += size){
        chunks.push(arr.slice(i, i + size -1))
    }

    return chunks;
}