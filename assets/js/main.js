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
    $('.menutogglebtn').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $('.user_auth_items .dropdown-menu').addClass('active');
    });


    $('.user_auth_items .dropdown-menu').click(function (e) {
        e.stopPropagation();
    });

    $(document).click(function () {
        $('.menutogglebtn').removeClass('active');
        $('.user_auth_items .dropdown-menu').removeClass('active');
    });
});
// header sticky
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header_area').addClass('headerSticky')
        } else {
            $('.header_area').removeClass('headerSticky')
        }
    });
});

// shop by category slider start
var swiper = new Swiper(".shopByCategorySlider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".categorynextnavigate",
        prevEl: ".categoryprevnavigate",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
    on: {
        init: function () {
            updateNavButtons(this);
        },
        slideChange: function () {
            updateNavButtons(this);
        },
        resize: function () {
            updateNavButtons(this);
        }
    }
});

function updateNavButtons(swiper) {
    const prevBtn = document.querySelector(".categoryprevnavigate");
    const nextBtn = document.querySelector(".categorynextnavigate");

    if (swiper.isBeginning) {
        prevBtn.style.opacity = "0.5";
        prevBtn.style.pointerEvents = "none"; // Optional: disable click
    } else {
        prevBtn.style.opacity = "1";
        prevBtn.style.pointerEvents = "auto";
    }

    if (swiper.isEnd) {
        nextBtn.style.opacity = "0.5";
        nextBtn.style.pointerEvents = "none"; // Optional: disable click
    } else {
        nextBtn.style.opacity = "1";
        nextBtn.style.pointerEvents = "auto";
    }
}


// shop by category slider end

$(document).ready(function(){
    $('.filterCategoryBtn').click(function(){
        $(this).find('.filterBtnIcon').toggleClass('active');
    });
});

// $(document).ready(function(){
//     $('.resetAll').click(function(){
//         // Uncheck all custom checkboxes inside the offcanvas body
//         $('.offcanvas-body input[type="checkbox"]').prop('checked', false).trigger('change');
//          // Clear all text inputs (From / To fields)
//         $('.offcanvas-body input[type="text"]').val('');
//     });
// });
$(document).ready(function(){
    $('.resetAll').on('click touchstart', function(e){
        e.preventDefault(); // prevent any default action on mobile
        console.log('Reset triggered');
        $('.offcanvas-body input[type="checkbox"]').prop('checked', false).trigger('change');
        $('.offcanvas-body input[type="text"]').val('');
    });
});

