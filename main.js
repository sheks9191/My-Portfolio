const projectContainer = document.querySelector('.project-container');
let shadowA = document.querySelector('.contacts');
let shadowB = document.querySelector('.about-container');

let changeBgColor = () => {
    projectContainer.style.backgroundColor = '#E35F75';
}

projectContainer.addEventListener('mouseenter', changeBgColor);
projectContainer.addEventListener('mouseleave', () => projectContainer.style.backgroundColor = '' )

let boxShadowA = () => {
    shadowA.classList.add('active')
}

shadowA.addEventListener('mouseenter', boxShadowA);
shadowA.addEventListener('mouseleave', () => shadowA.classList.remove('active'));

let boxShadowB = () => {
    shadowB.classList.add('active')
}

shadowB.addEventListener('mouseenter', boxShadowB);
shadowB.addEventListener('mouseleave', () => shadowB.classList.remove('active'));


const controlBtn = document.querySelector('.control-btn');
const mobile = document.querySelector('.nav-list ul');

let changeBtn = () => {
    controlBtn.classList.toggle('active')
    mobile.classList.toggle('active')
}
controlBtn.addEventListener('click', changeBtn);




