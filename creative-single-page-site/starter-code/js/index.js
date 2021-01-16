// Navigation =====
// ================

const hamburger = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close');
const nav = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    closeButton.style.display = 'block';
    nav.classList.add('active');
});

closeButton.addEventListener('click', () => {
    hamburger.style.display = 'block';
    closeButton.style.display = 'none';
    nav.classList.remove('active');
});

// Slider ========
//================

const track = document.querySelector('.slider-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.slider-next');
const previousButton = document.querySelector('.slider-previous');
const headingTrack = document.querySelector('.slider-headings');


// Function to move slide track either right or left depening on click
const moveSlides = (currentSlide, nextSlide, moveDistance) => {
    currentSlide.style.opacity = '0';
    currentSlide.classList.remove('current-slide');
    nextSlide.style.opacity = '1';
    nextSlide.classList.add('current-slide');
}

// Function to show headings depending on click
const moveHeadings = (currentHeading, nextHeading) => {
    currentHeading.classList.remove('current-heading');
    nextHeading.classList.add('current-heading');
}

// Set next and previous buttons to listen for click and change slides and headings accordingly
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveSlides(currentSlide, nextSlide, nextSlide.style.left);

    const currentHeading = headingTrack.querySelector('.current-heading');
    const nextHeading = currentHeading.nextElementSibling;
    moveHeadings(currentHeading, nextHeading);
})

previousButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.previousElementSibling;
    moveSlides(currentSlide, nextSlide, nextSlide.style.left);
    
    const currentHeading = headingTrack.querySelector('.current-heading');
    const nextHeading = currentHeading.previousElementSibling;
    moveHeadings(currentHeading, nextHeading);
})


