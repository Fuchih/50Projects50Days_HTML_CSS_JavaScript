const glasses = document.querySelectorAll('.glass')
const empty = document.querySelector('.empty')
const fulfil = document.querySelector('.fulfil ')
const percent = document.querySelector('.percent ')
const remain = document.querySelector('.remain ')
const remained = document.querySelector('.remained ')

glasses.forEach((glass, index) => {
  glass.onclick = () => {
    glass.classList.add('color')

    liter(index)
    isFulfil(index)
    glassColor(index)
  }
})

function isFulfil(index) {
  empty.style.height = `${100 - 12.5 * (index + 1)}%`
  fulfil.style.height = `${12.5 * (index + 1)}%`
}

function liter(index) {
  remain.innerText = `${2 - (250 * (index + 1)) / 1000}L`
  percent.innerText = `${12.5 * (index + 1)}%`

  if (index === glasses.length - 1) {
    remain.innerText = ''
    remained.innerText = ''
  } else {
    remained.innerText = 'Remained'
  }
}

function glassColor(index) {
  for (let i = 0; i < index; i++) {
    glasses[i].classList.add('color')
  }
}
