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

$(document).ready(function(){
    $('.filterCategoryBtn').click(function(){
        $(this).find('.filterBtnIcon').toggleClass('active');
    });
});

$(document).ready(function(){
    $('.resetAll').click(function(){
        // Uncheck all custom checkboxes inside the offcanvas body
        $('.offcanvas-body input[type="checkbox"]').prop('checked', false).trigger('change');
         // Clear all text inputs (From / To fields)
        $('.offcanvas-body input[type="text"]').val('');
    });
});
$(document).ready(function(){
    $('.productinformation_tab_area ul li button').click(function(){
        // active class switch
        $('.productinformation_tab_area ul li button').removeClass('active');
        $(this).addClass('active');

        // এখন active tab চেক করো এবং section show/hide করো
        if ($('.productInfo').hasClass('active')) {
            $('.productInformationtable').css({'display':'block'});
            $('.product_description_area').css({'display':'none'});
        }

        if ($('.productDes').hasClass('active')) {
            $('.product_description_area').css({'display':'block'});
            $('.productInformationtable').css({'display':'none'});
        }
    });

    // পেজ লোড হওয়ার সময়ও একবার চেক করো (যদি active ডিফল্ট থাকে)
    if ($('.productInfo').hasClass('active')) {
        $('.productInformationtable').show();
        $('.product_description_area').hide();
    }

    if ($('.productDes').hasClass('active')) {
        $('.product_description_area').show();
        $('.productInformationtable').hide();
    }
});


$(document).ready(function(){
    $('.color_area .color_btn').click(function(){
        $(this).closest('.color_area').find('.color_btn').removeClass('active')
        $(this).addClass('active');
    });
});

// quantity set area
$(document).ready(function(){
    $('.increaseQty').click(function(){
        var currentVal = parseInt($('.quantityInput').text()); // text() ব্যবহার করো
        $('.quantityInput').text(currentVal + 1);
    });

    $('.decreaseQty').click(function(){
        var currentVal = parseInt($('.quantityInput').text());
        if (currentVal > 1) {
            $('.quantityInput').text(currentVal - 1);
        }
    });
});
$(document).ready(function(){
    $('.relatedincreaseQty').click(function(){
        var currentVal = parseInt($('.relatedquantityInput').text()); // text() ব্যবহার করো
        $('.relatedquantityInput').text(currentVal + 1);
    });

    $('.relateddecreaseQty').click(function(){
        var currentVal = parseInt($('.relatedquantityInput').text());
        if (currentVal > 1) {
            $('.relatedquantityInput').text(currentVal - 1);
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


// product slider start
  var swiper = new Swiper(".productDetailsSlider", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".productDetailsSlider2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".producDnext",
        prevEl: ".producDprev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

// quick view slider start
  var swiper = new Swiper(".quickviewSlider", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".quickviewSlider2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".quickViewnext",
        prevEl: ".quickViewprev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
    var swiper = new Swiper(".imageviewSlider", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".imageViewnext",
        prevEl: ".imageViewprev",
      },
    });

