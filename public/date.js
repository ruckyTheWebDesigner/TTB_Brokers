const d = new Date()
let text = d.toLocaleString()
let copyright = d.getFullYear()
document.getElementById('date').innerHTML = 'Last Updated ' + text

document.getElementById('footer-copyright').innerHTML =
  '© ' + copyright + ' TTB Group Inc. All rights reserved.'

//Get the button
let mybutton = document.getElementById('btn-back-to-top')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop)

function backToTop() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

var acc = document.getElementsByClassName('accordion')
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
    var panel = this.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
}
