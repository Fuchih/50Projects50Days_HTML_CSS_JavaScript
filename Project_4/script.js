const div = document.querySelector('div')
const btn = document.querySelector('button')
const input = document.querySelector('input')

btn.addEventListener('click', () => {
  div.classList.toggle('show')
  input.focus()
})
