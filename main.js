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

const setSlide = (setAct) => {
    img.src = sliders[setAct].image;
    h1.textContent = sliders[setAct].txt;
}
const resetInterval = () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(changeSlide, time);
}

const changeSlide = () => {
    active++;
    if (active === sliders.length) active = 0
    setSlide(active)
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
    setSlide(active)
    changeDot();
    resetInterval();
}

// change slide with dots 
dots.forEach((dot)=>{
    dot.addEventListener('click', (chooseDot)=>{
        dots.forEach((dot)=>{dot.classList.remove('active')})
        dot.classList.add('active');
        const act = dots.findIndex((dot)=>dot.classList.contains('active'));
        active = act;
        setSlide(act)
        resetInterval();
    })
})

let slideInterval = setInterval(changeSlide, time);

window.addEventListener('keydown', keyChangeSlide)