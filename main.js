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

let time = 2000;
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

// change slide with key
const keyChangeSlide = (e) => {
    if (e.keyCode === 37){
        active--;
        if(active === -1) active = 2;
    } else if (e.keyCode === 39){
        active++;
        if(active === 3) active = 0;
    }
    img.src = sliders[active].image;
    h1.textContent = sliders[active].txt;    
    changeDot();
    clearInterval(slideInterval);
    slideInterval = setInterval(changeSlide, time);
}

// change slide with dots 
dots.forEach((dot)=>{
    dot.addEventListener('click', (chooseDot)=>{
        dots.forEach((dot)=>{dot.classList.remove('active')})
        dot.classList.add('active');
        const act = dots.findIndex((dot)=>dot.classList.contains('active'));
        img.src = sliders[act].image;
        h1.textContent = sliders[act].txt; 
        active = act;
        clearInterval(slideInterval);
        slideInterval = setInterval(changeSlide, time);
    })
})

let slideInterval = setInterval(changeSlide, time);

window.addEventListener('keydown', keyChangeSlide)