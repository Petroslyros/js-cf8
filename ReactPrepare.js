// Turnary operator
let age = 16;
let name = age > 10 ? "Pedro" : "Jack";

const Component = () => {
  return age > 10 ? <div> Pedro </div> : <div> Jack</div> 
}

//objects
const name0 = "Pedro"
const age0 = 20

const person = {
  name0,
  age0,
  isMarried: false
};

const {name1,age1,isMarried} = person;

const person2 = {...person, name0: "Jack"}

//arrays
const names = ["Pedro", "Jack", "Jessica"]
const names2 = [...names, "Joel"] //names + Joel

//Map
names.map((name) => {
  return name + "1";
})

names.map((name) => {
  return <h1> {name} </h1>
})

//Filter
const names0 = ["Pedro", "Jessica", "Carol", "Pedro","Pedro"]
names.filter((name) => {
  return name !== "Pedro"
})

//Async
const axios = require("axios");

const fetchData = async () => {
  try{
const respnse = await axios.get("https://cat-fact.herokuapp.com/facts");
console.log(response.data)
  }catch (err) {
  console.log("Error", err.message);
} finally {
  console.log("HI")
  }
};

fetchData();




