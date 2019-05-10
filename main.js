// alert('ok')

const sliders = [{
        image: "imgs/img1.jpg",
        txt: "tempor."
    },
    {
        image: "imgs/img2.jpg",
        txt: "pellentesque."
    },
    {
        image: "imgs/img3.jpg",
        txt: "convallis."
    }]

const img = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
let active = 0;

const changeSlide = () => {
    active++;
    if (active === sliders.length) active = 0
    img.src = sliders[active].image;
    h1.textContent = sliders[active].txt;
}
    
setInterval(changeSlide, 2000)