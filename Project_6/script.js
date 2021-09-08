const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {
  const triggerRef = window.innerHeight - 150
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerRef) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
