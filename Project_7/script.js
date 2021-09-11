const btn = document.querySelectorAll('.btn')
const ps = document.querySelector('.ps')
const xbox = document.querySelector('.xbox')

btn[0].addEventListener('click', function () {
  ps.style.flex = '2'
  xbox.style.flex = '1'
})

btn[1].addEventListener('click', function () {
  xbox.style.flex = '2'
  ps.style.flex = '1'
})
