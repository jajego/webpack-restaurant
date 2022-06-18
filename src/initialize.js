import loadLanding from './pages/landing';
import loadHome from './pages/home';
import loadMenu from './pages/menu';
import loadContact from './pages/contact';

function createHeader() {
    let header = document.createElement('header');
    header.classList.add('header');
    header.id = 'header';

    let barName = document.createElement('p');
    barName.classList.add('bar-name');
    barName.textContent = 'BAR MOON';
    header.appendChild(barName);

    return header;
}

function createNav() {
    const nav = document.createElement('nav');

    nav.innerHTML = `
                        <ul class='nav' id='nav'>
                            <li class='navItem' id='about-nav'>About</li>
                            <li class='navItem' id='menu-nav'>Menu</li>
                            <li class='navItem' id='contact-nav'>Contact</li>
                        </ul>
                    `

    
    const header = document.getElementById('header');
    header.appendChild(nav);
}

function createNavLogic() {
    let about = document.getElementById('about-nav');
    about.addEventListener('click', (e) => {
        loadHome();
    });
    let menu = document.getElementById('menu-nav');
    menu.addEventListener('click', loadMenu);

    let contact = document.getElementById('contact-nav');
    contact.addEventListener('click', loadContact);
}

function createMain() {
    let main = document.createElement('main');
    main.classList.add('main');
    main.id = 'main';

    return main;
}

function createFooter() {
    let footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent = '(c) y-amessof-t 2022'

    return footer;
}

function initialize() {
    let content = document.getElementById('content');

    let entered = false;
    loadLanding();
    let landing = document.getElementById('landing');
    let landingLogo = document.getElementById('logo-landing');
    
    landing.addEventListener('click', () => {
        landing.remove();
        landingLogo.remove();
        
        content.appendChild(createHeader());
        createNav();
        createNavLogic();
        
        content.appendChild(createMain());
        content.appendChild(createFooter());

        loadHome();
    })
}

export default initialize;