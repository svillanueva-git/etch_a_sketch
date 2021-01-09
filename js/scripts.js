const container = document.querySelector('#container');
container.classList.add('addGrid');

for (let i = 0; i < 256; i++) {
    const divs = document.createElement('div');
    container.appendChild(divs);
}



