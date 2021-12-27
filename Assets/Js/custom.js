$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar_ai').addClass('sticky');
            // document.getElementById("logo").innerHTML = "F.";
        } else {
            $('.navbar_ai').removeClass('sticky');
            // document.getElementById("logo").innerHTML = "Foood Web.";
        }
    });

    // Toggle menu/navbar script

    $('.navbar-toggler').click(function() {
        $('.navbar_ai .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
});

jQuery(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 430) {
            $('.navbar_ai').addClass('bg-black');
        } else if (ww >= 431) {
            $('.navbar_ai').removeClass('bg-black');
        };
    };
    $(window).resize(function() {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});

$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1000,
    smartSpeed: 2000,
    animateIn: 'linear',
    animateOut: 'linear',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

AOS.init();