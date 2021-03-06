function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const logo = document.createElement('img');
    logo.src = '../src/moon.png'
    logo.alt = 'Logo'

    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.innerHTML = 'BAR MOON BAR MOON BAR MOON BAR MOON BAR MOON BAR MOON\n BAR MOON BAR MOON BAR MOON BAR MOON BAR MOON BAR MOON\n BAR MOON BAR MOON BAR MOON BAR MOON BAR MOON BAR MOON\n BAR MOON BAR MOON BAR MOON BAR MOON BAR MOON BAR MOON\n ';

    home.appendChild(logo);
    home.appendChild(desc);

    return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(createHome());
}

export default loadHome;