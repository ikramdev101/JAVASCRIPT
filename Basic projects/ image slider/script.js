let Index = 0
const slides = document.querySelectorAll('.slide')
const totalSlides = slides.length

function showSlide(index) {
    if (index >= totalSlides) {
 Index = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1
    } else {
        Index = index
    }
    const offset = -Index * 100
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`
}

function nextSlide() {
    showSlide(Index + 1)
}

function prevSlide() {
    showSlide(Index - 1)
}




