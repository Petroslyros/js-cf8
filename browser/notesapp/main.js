const daysGR = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']  //like java ENUM class

const monthGR = ['January', 'February', 'March', 'April','May','June','July','August'
  ,'September','Octomber','November','December']

let notes = []
let count = 0

window.addEventListener('DOMContentLoaded', function() {

  this.setInterval(() => printGrDate(), 1000)

  this.document.querySelector('#addNoteBtn').addEventListener('click', function() {
    onInsertHandler(
      {key: count +1, 
      note: document.querySelector('#inputNote').value.trim(),
      softDeleted: false})
  })

  this.document.querySelector('#inputNote').addEventListener('keyup', function(e) {
      if(e.key === 'Enter') { onInsertHandler(
      {key: count +1, 
      note: e.target.value.trim(),
      softDeleted: false})
      }
  })

})