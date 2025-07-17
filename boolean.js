let inputName = undefined
let username = inputName || "default user"

console.log(username) 

let apiURL = "https://api.aueb.gr"
const publicApiURL = apiURL && getfromURL(apiURL)

function getfromURL (url) {
    return "something from URL"
}

let value = 0
let result = value || "default value"
console.log(result)

const