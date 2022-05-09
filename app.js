let features = document.querySelector('#feature');
let company = document.querySelector('#company');
let subListElements = [features, company];

subListElements.forEach(element => {
    element.addEventListener('click', () => {
        let dropdown = element.children[1];
        dropdown.classList.toggle('show');
    })
})
