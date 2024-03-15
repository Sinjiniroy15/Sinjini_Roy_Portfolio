let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

const readMoreBtn = document.getElementById('read-more');
const extraContent = document.getElementById('extra-content');

readMoreBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action of anchor tag

    // Toggle the visibility of extra content
    extraContent.classList.toggle('hidden');

    // Change the text of the button based on visibility
    if (extraContent.classList.contains('hidden')) {
        readMoreBtn.textContent = 'Read More';
    } else {
        readMoreBtn.textContent = 'Read Less';
    }
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contact-number').value;
    const emailSubject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    document.getElementById('success-message').style.display = 'block';
});

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


