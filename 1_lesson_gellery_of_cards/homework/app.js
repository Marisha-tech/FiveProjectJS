const slides = document.querySelectorAll('.slide')

// I Вариант обхода slides
for (const slide of slides) {
    slide.addEventListener('click', () => {

        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    // II Вариант обхода slides
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
