const counters = document.querySelectorAll('#counter')

counters.forEach((counter) => {
  counter.innerText = 0

  const update = () => {
    const number = parseInt(counter.getAttribute('data-number'))
    let originNumber = parseInt(counter.innerText)
    let updateNumber = originNumber + 1

    if (originNumber < number) {
      counter.innerText = updateNumber
      setTimeout(update, 5)
      return
    }

    counter.innerText = number
  }

  update()
})
