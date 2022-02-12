const menuIconButton = document.querySelector('[data-menu-icon-btn]')
const sidebar = document.querySelector('[data-sidebar]')

menuIconButton.addEventListener('click', () => {
  sidebar.classList.toggle('open')
})

const d = new Date()
let text = d.toString()
document.getElementById('demo').innerHTML = 'Last Login: ' + text

document.getElementById('lastsigned').innerHTML = 'Last Login: ' + text

const time = new Date().getHours()
let greeting
if (time < 12) {
  greeting = 'Good Morning'
} else if (time < 16) {
  greeting = 'Good Afternoon'
} else {
  greeting = 'Good Evening'
}
document.getElementById('greeting').innerHTML = greeting

const footerdate = new Date().getFullYear()

document.getElementById('footer').innerHTML =
  'Copyright ©' + footerdate + ' All rights reserved.'
