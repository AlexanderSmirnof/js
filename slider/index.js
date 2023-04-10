const sliderLine = document.querySelector('.slider-line'),
      prevButton = document.querySelector('.prev'),
      nextButton = document.querySelector('.next'),
      dots = document.querySelectorAll('.dot'),
      texts = document.querySelectorAll('.slider-nav-item')
let position = 0,
    dotIndex = 0
    textIndex = 0
function nextSlide() {
    if (position < 1358) {
        position += 679
        dotIndex ++
        textIndex ++
    } else {
        position = 0
        dotIndex = 0
        textIndex = 0
    }
    sliderLine.style.left = -position +'px'
    thisSlide(dotIndex)
    thisText(textIndex)
};
function prevSlide() {
    if (position > 0) {
        position -= 679
        dotIndex --
        textIndex --
    } else {
        position = 1358
        dotIndex = dots.length -1
        textIndex = texts.length -1
    }
    sliderLine.style.left = -position +'px'
    thisSlide(dotIndex)
    thisText(textIndex)
};
function thisSlide(index) {
    for(let dot of dots) {
        dot.classList.remove('second')
    }
    dots[index].classList.add('second')

}
function thisText(index) {
    for(let text of texts) {
        text.classList.remove('first')
    }
    texts[index].classList.add('first')
}
nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)
dots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
        position = 679 * index
        sliderLine.style.left = -position + 'px'
        dotIndex = index
        thisSlide(dotIndex)
        textIndex = index
        thisText(textIndex)
    })
})
