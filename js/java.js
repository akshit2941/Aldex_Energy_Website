// Setup and start animation! 
var typed = new Typed('#element', {
    strings: ['Aldex Energy'],
    typeSpeed: 250,
});

// Image Slider 

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 3000);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 3000);


}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})
window.onresize = function (event) {
    reloadSlider();
};


// Reveal Animation
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

// Get the DOM elements for the image carousel
const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelectorAll(".review"),
    buttons = document.querySelectorAll(".button");

let imageIndex = 1,
    intervalId;

// Define function to start automatic image slider
const autoSlide = () => {
    // Start the slideshow by calling slideImage() every 2 seconds
    intervalId = setInterval(() => slideImage(++imageIndex), 3000);
};
// Call autoSlide function on page load
autoSlide();

// A function that updates the carousel display to show the specified image
const slideImage = () => {
    // Calculate the updated image index
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    // Update the carousel display to show the specified image
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// A function that updates the carousel display to show the next or previous image
const updateClick = (e) => {
    // Stop the automatic slideshow
    clearInterval(intervalId);
    // Calculate the updated image index based on the button clicked
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    // Restart the automatic slideshow
    autoSlide();
};

// Add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Add mouseover event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Add mouseleave event listener to wrapper element to start auto sliding again
wrapper.addEventListener("mouseleave", autoSlide);



function energy() {
    // Get the selected values from the select elements
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var energy;

    if (num2 === 1) {
        energy = energyroof(num1);
        // var energy = Math.round(energy);
        var options = { style: 'decimal' };
        var energy = energy.toLocaleString('en-IN', options);
        document.getElementById('energy-final').textContent = 'This Will Generate ' + energy + ' Units Annually';
    } else if (num2 === 2) {
        energy = energyground(num1);
        // var energy = Math.round(energy);
        var options = { style: 'decimal' };
        var energy = energy.toLocaleString('en-IN', options);
        document.getElementById('energy-final').textContent = 'This Will Generate ' + energy + ' Units Annually';
    } else {
        energy = "Invalid Option Selected";
        console.log(energy);
        document.getElementById('energy-final').textContent = energy;
    }



    function energyroof(x) {
        var energy = (x) * 4.5 * 30 * 11;
        // document.getElementById('energy-final').textContent = 'Estimated Price: ' + energy + ' Rs';
        return energy;
    }

    function energyground(p) {
        var energy = (p) * 4.6 * 30 * 11;
        // document.getElementById('energy-final').textContent = 'Estimated Price: ' + energy + ' Rs';
        return energy;
    }

}

function resetenergy() {
    // Clear the entered values
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';

    // Clear the result
    document.getElementById('energy-final').textContent = '';
}

