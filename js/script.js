//Loader
$(document).ready(function () {
    $('.loader').fadeOut();
});

// Navigation
const navSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__link');
    const html = document.querySelector('html');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');

        // Burger Animation
        burger.classList.toggle('toggle');
        html.classList.toggle('no-scroll');
        navLinks.forEach(n => n.addEventListener('click', closeMenu))
    });

    function closeMenu(){
        nav.classList.toggle("active");
        burger.classList.toggle("toggle");
        html.classList.toggle('no-scroll');
    }
}

navSlide();


$(document).ready(function(){
    $('.news__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: true,
        prevArrow: $('.news__prev'),
        nextArrow: $('.news__next'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });

  });

  $(document).ready(function(){

    $('.bottom__row').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        centerPadding: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false
                }
            }
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         dots: false
            //     }
            // }
        ]

    });

  });

  (function() {
    emailjs.init('AL6qt0kC0BFk4tBGD');
})();


  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        //provera

            let email = document.getElementById('email');
            let validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!validRegex.test(email.value)){
                alert('Polje "Email" je obavezno i mora imati validnu formu. Primer: webant.rs@gmail.com')
                return 
            }

        // generate a five digit number for the contact_number variable

        // these IDs from the previous steps
        emailjs.sendForm('service_jxuyqym', 'template_qkledzp', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
            event.target.reset();
        

    });
}