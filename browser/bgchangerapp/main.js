let color = undefined

window.addEventListener('DOMContentLoaded', function() {

    this.document.querySelector('#btn')
    .addEventListener('click',function() {
        onClickMeClicked()
    })
})

// Controller
function onClickMeClicked() {
    updateBg()
}

// Model
function updateBg() {
    color = getBgColor()
    renderBg()
}

function getBgColor() {
    const colors = ['red','blue','green','blue','black']
    return colors[Math.floor(Math.random() * colors.length)]
}


// View
function renderBg() {
    document.getElementById('color').innerHTML = color
    document.body.style.backgroundColor = color
}