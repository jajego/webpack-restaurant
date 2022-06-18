function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.id = 'contact';

    let contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    let nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'name:';
    contactForm.appendChild(nameLabel);
    let name = contactForm.appendChild(document.createElement('input'));
    name.classList.add('form-name');
    name.type = 'text';
    name.id = 'name';
    name.name = 'name';

    let emailLabel = document.createElement('label');
    emailLabel.for = 'email';
    emailLabel.textContent = 'email:';
    contactForm.appendChild(emailLabel);
    let email = contactForm.appendChild(document.createElement('input'));
    email.classList.add('form-email');
    email.type = 'email';
    email.id = 'email';
    email.name = 'email';

    let msgLabel = document.createElement('label');
    msgLabel.for = 'msg';
    msgLabel.textContent = 'message:';
    contactForm.appendChild(msgLabel);
    let msg = contactForm.appendChild(document.createElement('input'));
    msg.classList.add('form-msg');
    msg.type = 'text';
    msg.id = 'msg';
    msg.name = 'msg';

    let button = document.createElement('button');
    button.type = 'submit';
    button.innerText = 'Send';
    contactForm.appendChild(button);

    contact.appendChild(contactForm);
    return contact;
}

function loadContact() {
    let main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(createContact());
}

export default loadContact;