const bar = document.querySelector('.bar')
const barClose = document.querySelector('.close')
const back = document.querySelector('.back')
const rotate = document.querySelector('.rotate')
const nav = document.querySelector('nav')

bar.onclick = function () {
  back.style.transform = 'rotate(-15deg)'
  rotate.style.transform = 'rotate(-80deg)'
  nav.style.transform = 'translate(0)'
}

barClose.onclick = function () {
  back.style.transform = ''
  rotate.style.transform = ''
  nav.style.transform = 'translate(-200px)'
}
