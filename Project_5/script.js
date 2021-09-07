const pic = document.querySelector('img')
const h1 = document.querySelector('h1')
let i = 99

h1.onclick = function () {
  let clearImg = setInterval(() => {
    pic.style.filter = `blur(${i--}px)`
    h1.style.border = '0'
    h1.innerHTML = i + '%'

    if (i === 0) {
      h1.style.display = 'none'
      clearInterval(clearImg)
    }
  }, 20)
}
