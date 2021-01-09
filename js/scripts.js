const container = document.querySelector('#container');
container.classList.add('addGrid');


for (let i = 0; i < 256; i++) {
    const divs = document.createElement('div');
    divs.classList.add('squares');
    container.appendChild(divs);
}

const divDiv = document.querySelectorAll('div div');
container.addEventListener('mouseover', function(e) {
    e.target.style.background = 'black';
})