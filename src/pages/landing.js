function createLanding() {
    let body = document.body;
    let landing = document.createElement('div');
    landing.classList.add('landing');
    landing.id = 'landing';

    let logo = document.createElement('img');
    logo.src = '../src/moon.png'
    logo.alt = 'Logo-landing';
    logo.classList.add('logo-landing');
    logo.id = 'logo-landing';

    let title = document.createElement('h1');
    title.innerText = 'BAR MOON\n 917287\n est. 2004'
    title.classList.add('title-landing');

    landing.appendChild(logo);
    landing.appendChild(title);

    return landing;
}

function loadLanding() {
    const content = document.getElementById('content');
    content.appendChild(createLanding());
}

export default loadLanding;
