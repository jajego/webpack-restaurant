function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.id = 'contact';

    let contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    let name = contactForm.appendChild(document.createElement('input'));
    name.type = 'text';
    let email = contactForm.appendChild(document.createElement('input'));
    email.type = 'email';
    let msg = contactForm.appendChild(document.createElement('input'));
    msg.type = 'text';

    contactForm.appendChild(name);
    contactForm.appendChild(email);
    contactForm.appendChild(msg);

    contact.appendChild(contactForm);
    return contact;
}

function loadContact() {
    let main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(createContact());
}

export default loadContact;