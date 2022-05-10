let features = document.querySelector('#feature');
let company = document.querySelector('#company');

let subListElements = [features, company];

subListElements.forEach(element => {
    element.addEventListener('click', () => {
        let dropdown = element.children[1];
        let upArrow = element.querySelector('.upArrow');
        let downArrow = element.querySelector('.downArrow');

        dropdown.classList.toggle('visibility');

        let arrows = [upArrow, downArrow];
        arrows.forEach(element => {
            if (element.classList.contains('arrowShow') == true) {
                element.classList.remove('arrowShow');
                element.classList.add('arrowHide');
            } else {
                element.classList.remove('arrowHide');
                element.classList.add('arrowShow');
            }
        });
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
