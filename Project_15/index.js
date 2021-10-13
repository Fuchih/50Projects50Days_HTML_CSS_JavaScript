const glasses = document.querySelectorAll('.glass')
const empty = document.querySelector('.empty')
const fulfil = document.querySelector('.fulfil ')
const percent = document.querySelector('.percent ')

glasses.forEach((glass, index) => {
  glass.onclick = () => {
    glass.classList.toggle('color')

    if(index >= 0) fulfil.style.opacity = 1
    // glass.style.opacity = 0

    fulfil.style.height = `${12.5 * (index + 1)}%`
    percent.innerText = `${12.5 * (index + 1)}%`
    empty.style.height = `${100 - 12.5 * (index + 1)}%`
  }
})
