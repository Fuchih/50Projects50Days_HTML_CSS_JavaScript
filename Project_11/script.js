const tips = document.querySelector('.tips')
const show = document.querySelector('.show-key')

window.addEventListener('keyup', (event) => {
  tips.style.display = 'none'
  show.style.display = 'block'

  show.innerHTML = `
  <span class="key">Key:${event.key == false ? 'Space' : event.key.toUpperCase()}</span>
  <span class="key-code">KeyCode:${event.keyCode}</span>
  `
})
