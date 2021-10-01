//Программно выбирать какой слайд будет активным


function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

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
}
slidesPlugin(4)
