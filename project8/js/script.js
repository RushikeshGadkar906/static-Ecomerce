// $("#nav-search-btn").click(function() {
//     $("#newpost").toggle();
// });

// Search Box


$(".burger").click(function() {
    $(this).toggleClass("--open");
    $(".main-mnu").slideToggle();
    return false;
});


$("#nav-searchBox").on("click", function() {
    $("#newpost").toggleClass("show");
    $("#nav-searchBox i").toggleClass("fas fa-times");
});
// Scrolling Script

$(document).ready(function() {

    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();

    // console.log(parseInt($(window).width()));
    if (parseInt($(window).width()) > 992) {

        if (startchange.length) {
            $(document).scroll(function() {
                scroll_start = $(this).scrollTop();
                // console.log(scroll_start + " == " + offset.top);

                if (scroll_start < 260) {
                    $('.social_media').css({ 'display': 'block' })
                } else {
                    $('.social_media').css({ 'display': 'none' })
                }
            });
        }

    } else {

        $('.social_media').css({ 'display': 'none' })
        $('.social_media').css({ 'display': 'none' })
    }
});
// Scrolling Script End
// Navbar 
$('body').on('mouseenter mouseleave', '.dropdown', function(e) {
    var _d = $(e.target).closest('.dropdown');
    if (e.type === 'mouseenter') _d.addClass('show');
    setTimeout(function() {
        _d.toggleClass('show', _d.is(':hover'));
        $('[data-toggle="dropdown"]', _d).attr('aria-expanded', _d.is(':hover'));
    }, 300);
});

/* this is not needed, just prevents page reload when a dd link is clicked */
$('.dropdown a').on('click tap', e => e.preventDefault())

// Search Box End

// Navbar End

$(function() {
    $(".preload").fadeOut(2000, function() {
        $(".content").fadeIn(1000);
    });

    // Counter

    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;

            // console.log(inc);
            // console.log(count);

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = count + inc;
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCount();
    });

    // Counter End
});

// $('.slider-for-top').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     fade: true,
//     asNavFor: '.slider-nav'
// });

// Slider


$(".slick-next").on({
    click: function ani() {
        $(".sliderTxtAnnimation").addClass("txtAnnimation");
        document.getElementsByClassName("txtAnnimation").animate([
            // keyframes
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-300px)' }
        ], {
            // timing options
            duration: 1000,
            iterations: Infinity
        });
    }
});
$(".slick-prev").on({
    click: function ani() {
        $(".sliderTxtAnnimation").addClass("txtAnnimation");
        document.getElementsByClassName("txtAnnimation").animate([
            // keyframes
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-300px)' }
        ], {
            // timing options
            duration: 1000,
            iterations: Infinity
        });
    }
});

// Slider End

$(window).on('resize load', function() {
    if ($(window).width() < 992) {
        $('.project-slider-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            focusOnSelect: true
        });
        $('.slider-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            focusOnSelect: true
        });
        $("button.slick-prev.slick-arrow").attr("style", "display: none !important");
        $("button.slick-next.slick-arrow").attr("style", "display: none !important");
        $(".about-right__small_img").css("display", "none");

    } else {
        $('.project-slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            focusOnSelect: true
        });
        $('.slider-nav').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            focusOnSelect: true
        });
    }
});