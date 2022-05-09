let features = document.querySelector('#feature');
let company = document.querySelector('#company');

let subListElements = [features, company];

subListElements.forEach(element => {
    element.addEventListener('click', () => {
        let dropdown = element.children[1];
        dropdown.classList.toggle('show');
    })
})

let burger = document.querySelector('.burgerMenu');
let menu = document.querySelector('#menu');
burger.addEventListener('click', () => {
    menu.style.display = 'flex';
})

let closeMenu = document.querySelector('.closeMenu');
closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
})
