document.getElementsById('helloTxt').innerHTML = '<strong>Hello Coding!</strong>'

const h1DOM = document.getElementById('helloTxt')
h1DOM.innerHTML = h1DOM.innerHTML + 'Hello Coding!'
h1DOM.style.backgroundColor = "#ff0000"


//create a p element 
const pDOM = document.createElement('p')
pDOM.innerHTML= "I am a paragraph"
pDOM.classList.add('borderBlack')

document.body.appendChild(pDOM)

