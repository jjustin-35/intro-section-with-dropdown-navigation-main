let features = document.querySelector('#feature');
let company = document.querySelector('#company');

let subListElements = [features, company];

let size = window.outerWidth;
window.addEventListener('resize', () => {
    size = window.outerWidth;
})

subListElements.forEach(element => {
    element.addEventListener('click', () => {
        let dropdown = element.children[1];
        if (size > 646) {
            dropdown.classList.toggle('visibility');
        }

        let upArrow = element.querySelector('.upArrow');
        let downArrow = element.querySelector('.downArrow');

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
let blackBack = document.querySelector('.blackBack');
let menu = document.querySelector('#menu');
let membership = document.querySelector('#membership');
burger.addEventListener('click', () => {
    menu.classList.add('visibility');
    membership.classList.add('visibility');
    blackBack.style = 'visibility: visible; opacity: 1;';
})

let closeMenu = document.querySelector('.closeMenu');
closeMenu.addEventListener('click', () => {
    menu.classList.remove('visibility');
    membership.classList.remove('visibility');
    blackBack.style = 'visibility: hidden; opacity: 0;';
})
