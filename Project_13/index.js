function showModal(val) {
  const alertContent = document.querySelector('.alert')
  const modal = document.querySelector('.modal')
  const close = document.querySelector('#close')

  modal.style.display = 'block'
  alertContent.innerText = val

  close.onclick = () => {
    modal.style.display = 'none'
  }
}

function checkID(formElement) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

  if (!regex.test(formElement.value)) {
    showModal('UserID must contain: Minimum six characters, at least one letter and one number')
    return
  }
}

function checkPwd(formElement) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

  if (!regex.test(formElement.value)) {
    showModal('Passwords must contain: Minimum eight characters, at least one uppercase letter, one lowercase letter and one number')
    return
  }
}

function confirmPwd(formElement) {
  const pwd = document.querySelector('#pwd')

  if (formElement.value != pwd.value) {
    showModal('Double check your password and try again')
    return
  }
}
