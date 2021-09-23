const faqs = document.querySelectorAll('.faq')
const icons = document.querySelectorAll('.icon')

for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener('click', () => {
    for (let i = 0; i < faqs.length; i++) {
      faqs[i].style.height = '60px'
      faqs[i].className = 'faq'
      icons[i].className = 'icon'
    }

    faqs[i].style.height = '90px'
    faqs[i].className = 'faq active'
    icons[i].className = 'icon-reverse'
  })
}
