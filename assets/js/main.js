$(document).ready(function () {
    // Show the button when scrolled down 100px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.backToTopBtn').fadeIn();
        } else {
            $('.backToTopBtn').fadeOut();
        }
    });

    // Scroll to top when button is clicked
    // $('.backToTopBtn').click(function () {
    //     $('html, body').animate({
    //         scrollTop: 0
    //     }, 500, 'linear'); // smooth and same speed
    //     return false;
    // });


});
document.querySelector('.backToTopBtn').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // same-speed smooth scroll
    });
});

$(document).ready(function () {
    // Hide preloader after 2 seconds
    setTimeout(function () {
        $('.preloader').fadeOut('slow');
    }, 2000);
});

$(document).ready(function () {
    $('.menutogglebtn').click(function () {
        $(this).toggleClass('active');
        $('.navigation_area').toggleClass('navActive')
    });
});