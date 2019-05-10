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
const dots = [...document.querySelectorAll('.dots span')]

let active = 0;

const changeDot = () => {
   const activeDot = dots.findIndex((dot)=>dot.classList.contains('active'));
   dots[activeDot].classList.remove('active')
   dots[active].classList.add('active')
}

const changeSlide = () => {
    active++;
    if (active === sliders.length) active = 0
    img.src = sliders[active].image;
    h1.textContent = sliders[active].txt;
    changeDot();
}



setInterval(changeSlide, 2000)