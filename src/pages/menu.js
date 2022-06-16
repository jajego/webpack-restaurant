function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.id = ('menu');
    let menuItems = [
        {
            name: 'The Desert Mule',
            price: '$8',
            description: 'Purple and slightly sandy, this drink is sure to excite hearts, minds, eyes, and teeth.'
        }, 
        {
            name: 'China Everything',
            price: '$9',
            description: 'As the name suggests.'
        },
        {
            name: 'Two-by-five',
            price: '$5',
            description: 'Two shots of whiskey and 5oz of pickle juice.'
        },
        {
            name: 'Light & Breezy',
            price: '$11',
            description: 'Citrus from another planet. You have never felt a breeze like this.'
        }
    ];
    for(let i = 0; i < menuItems.length; i++) {
        menu.appendChild(createMenuItemCard(menuItems[i]));
    }
    return menu;
}

function createMenuItemCard(item) {
    let card = document.createElement('div');
    card.classList.add('item-card')
    let name = document.createElement('h4');
    let price = document.createElement('p');
    let desc = document.createElement('p');

    name.textContent = item.name;
    price.textContent = item.price;
    desc.textContent = item.description;

    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(desc);

    return card;
}

function loadMenu() {
    let main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(createMenu());
}

export default loadMenu;