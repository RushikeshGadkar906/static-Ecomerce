// Navbar 
(function($) {
    $(function() {

        $('nav ul li a:not(:only-child)').hover(function(e) {
            $(this).siblings('.nav-dropdown').toggle();

            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });

        $('html').click(function() {
            $('.nav-dropdown').hide();
        });

        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });

        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });

    });
})(jQuery);
// Navbar End


// Subscribe Btn
var ckbox = $("input[name='checklist']");
$("#cbox1")
    .change(function() {
        if (ckbox.is(':checked')) {
            $("#subBtn").removeClass("btnCheck");
        } else {
            $("#subBtn").addClass("btnCheck");

        }
    })

// Subscribe Btn End


// Responsive Slider
var mq = window.matchMedia("(min-width: 768px)");


$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$('.slider-addPic').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 770,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },

    ],
});

// var mq = window.matchMedia("(max-width: px)"); {

// }


// Responsive Slider End


$(function() {
    const $tabWrap = $(".tab-wrap");
    $tabWrap.each(function() {
        $(this)
            .find(".tab-item-wrap")
            .first()
            .find(".content")
            .show()
            .parent().addClass('active');

        var title = $(this).find(".title"),
            $content = $(this).find(".content");
        // console.log(title);

        title.on("click", function() {
            $(this).parent().toggleClass('active');

            var a = $(this).parent().find(".content").toggle();

            $(this).find('i').attr('class', 'fa fa-arrow-up');

            // $(this).parent().addClass('tuan');
            // .css()
        });

        $(this)
            .find(".tab-item-wrap")
            .find(".title")
            .on("click", function() {

                $(this).parent().addClass('active').siblings().removeClass('active').find('i').attr('class', 'fa fa-arrow-down');
                $(this).find('i').attr('class', 'fa fa-arrow-up');
                $(this)
                    .parents(".tab-item-wrap")
                    .siblings()
                    .find(".content")
                    .hide()
                    .parents(".tab-item-wrap")
            });
    });



});

// Form Validation

let fnamenode = document.getElementById("fname");
let emailnode = document.getElementById("email");
let messagenode = document.getElementById("message");

let fnamespan = document.getElementById("fnameerror");
let emailspan = document.getElementById("emailerror");
let messagespan = document.getElementById("messageerror");

function validate1() {
    fnamespan.innerHTML = "";
    let fname = fnamenode.value;

    if (fnamenode.value == "") {
        fnamespan.innerHTML = "<b>Name field is required </b>";
        return false
    } else if (fname.length < 3) {
        fnamespan.innerHTML = "<b> Name must of Atleast 3 Chars</b>";
        return false;
    }
}

function validate2() {
    emailspan.innerHTML = "";
    let email = emailnode.value;

    if (emailnode.value == "") {
        emailspan.innerHTML = "<b>Email field is required </b>";
        return false;
    } else if (!email.includes("@")) {
        emailspan.innerHTML = "<b> @ is missing in email</b>";
        return false;
    }
}

function validate3() {
    messagespan.innerHTML = "";
    let fname = fnamenode.value;

    if (fnamenode.value == "") {
        messagespan.innerHTML = "<b>Message field is required </b>";
        return false
    }
}

function validateForm() {

    let v1 = validate1();
    let v2 = validate2();
    let v3 = validate3();


    if (v1 && v2 && v3) {
        // buttonnode.disabled=true;
        return true;
    } else {
        // buttonnode.disabled=false;
        return false;
    }
}

// Form Validation End


$(function() {

    counter = $(".cartCount"),
        addBtn = $(".addToCart"),
        value = parseInt($(".cartCount").html());
    $("#noItem").css("display", "block");
    $(".itemAdded").css("display", "none");


    addBtn.on("click", function() {

        if (!value) {
            value = 0;
            counter.html(++value);

            $("#noItem").css("display", "none");
            $(".itemAdded").css("display", "block");

        } else {
            counter.html(++value);
            $("#noItem").css("display", "none");
            $(".itemAdded").css("display", "block");
        }
        // console.log(value);
        return
    });

    // Add to Cart End

    // Table Calculation
    price1 = $("#price1").html();
    qty1 = $("#qty1").val();
    // ans1 = $("#ans1").html();

    price2 = $("#price2").html();
    qty2 = $("#qty2").val();
    // ans2 = $("#ans2").html();

    price3 = $("#price3").html();
    qty3 = $("#qty3").val();
    // ans3 = $("#ans3").html();

    // console.log(price1, price2, price3);
    // console.log(qty1, qty2, qty3);
    // console.log(ans1, ans2, ans3);

    ans1 = price1 * qty1;
    ans2 = price2 * qty2;
    ans3 = price3 * qty3;
    $('#ans1').html(ans1);
    $('#ans2').html(ans2);
    $('#ans3').html(ans3);

    total = ans1 + ans2 + ans3;

    // console.log(total);
    $('.subtotal').html(total);

    // Table Calculation End
});

function itemAns1() {
    price1 = $("#price1").html();
    qty1 = $("#qty1").val();

    ans1 = price1 * qty1;
    $('#ans1').html(ans1);
    $('#ans1').html(ans1);
    $('#ans2').html(ans2);
    $('#ans3').html(ans3);

    total = ans1 + ans2 + ans3;
    $('.subtotal').html(total);

}

function itemAns2() {
    price2 = $("#price2").html();
    qty2 = $("#qty2").val();

    ans2 = price2 * qty2;
    $('#ans2').html(ans2);
    $('#ans1').html(ans1);
    $('#ans2').html(ans2);
    $('#ans3').html(ans3);

    total = ans1 + ans2 + ans3;
    $('.subtotal').html(total);

}

function itemAns3() {
    price3 = $("#price3").html();
    qty3 = $("#qty3").val();

    ans3 = price3 * qty3;
    $('#ans3').html(ans3);
    $('#ans1').html(ans1);
    $('#ans2').html(ans2);
    $('#ans3').html(ans3);

    total = ans1 + ans2 + ans3;
    $('.subtotal').html(total);

}


// Remove row

$(".removeRow").click(function() {
    $(this).closest(".remRow").remove();
    var id = $(this).attr('id');
    // alert(id);
    calTotal(id);
});

function calTotal(id) {

    // Table Calculation
    price1 = $("#price1").html();
    qty1 = $("#qty1").val();
    // ans1 = $("#ans1").html();

    price2 = $("#price2").html();
    qty2 = $("#qty2").val();
    // ans2 = $("#ans2").html();

    price3 = $("#price3").html();
    qty3 = $("#qty3").val();
    // ans3 = $("#ans3").html();

    // console.log(price1, price2, price3);
    // console.log(qty1, qty2, qty3);
    // console.log(ans1, ans2, ans3);
    ans1 = price1 * qty1;
    ans2 = price2 * qty2;
    ans3 = price3 * qty3;
    $('#ans1').html(ans1);
    $('#ans2').html(ans2);
    $('#ans3').html(ans3);

    if (id == 1) {
        total = ans2 + ans3;

        // console.log(total);
        $('.subtotal').html(total);
    } else if (id == 2) {
        total = ans1 + ans3;
        console.log(total);
        $('.subtotal').html(total);
    } else if (id == 3) {
        total = ans1 + ans2;

        console.log(total);
        $('.subtotal').html(total);
    }
}
// Remove row End

$(".showcoupon").click(function() {
    // $(".enterCoupon-section").css("display", "block");
    $('.enterCoupon-section').toggle('show');
});


// Checkout page Validation
checkfname = document.getElementById("checkfname");
checklname = document.getElementById("checklname");
checkaddress = document.getElementById("checkaddress");
checkcity = document.getElementById("checkcity");
checkZIP = document.getElementById("checkZIP");
checkphone = document.getElementById("checkphone");
checkemail = document.getElementById("checkemail");



let checkfnamespan = document.getElementById("checkfnamesapn");
let checklnamespan = document.getElementById("checklnamespan");
let checkaddresssapn = document.getElementById("checkaddresssapn");
let checkcitysapn = document.getElementById("checkcitysapn");
let checkZIPsapn = document.getElementById("checkZIPsapn");
let checkphonesapn = document.getElementById("checkphonesapn");
let checkemailsapn = document.getElementById("checkemailsapn");

function validatecheckfname() {

    checkfnamespan.innerHTML = "";

    if (checkfname.value == "") {

        checkfnamespan.innerHTML = "<b> First name </b> field is required </br>";
        checkfname.style.border = "1px solid #a00";

        return false;
    } else {

        checkfname.style.border = "1px solid green";
        return true;
    }
}

function validatechecklname() {

    checklnamespan.innerHTML = "";

    if (checklname.value == "") {
        checklnamespan.innerHTML = "<b> Last name </b> field is required </br>";
        checklname.style.border = "1px solid #a00";
        return false;
    } else {
        checklname.style.border = "1px solid green";
        return true;
    }

}

function validatecheckaddress() {
    checkaddresssapn.innerHTML = "";

    if (checkaddress.value == "") {
        checkaddresssapn.innerHTML = "<b>Address </b> field is required </br>";
        checkaddress.style.border = "1px solid #a00";
        return false;
    } else {
        checkaddress.style.border = "1px solid green";
        return true;
    }
}



function validatecheckcity() {
    checkcitysapn.innerHTML = "";

    if (checkcity.value == "") {
        checkcitysapn.innerHTML = "<b>City </b>field is required </b>";
        checkcity.style.border = "1px solid #a00";
        return false;
    } else {
        checkcity.style.border = "1px solid green";
        return true;
    }
}

function validatecheckZIP() {
    checkZIPsapn.innerHTML = "";
    let zip = checkZIP.value;

    if (checkZIP.value == "") {
        checkZIPsapn.innerHTML = "<b> ZIP Code</b> field is required </br>";
        checkZIP.style.border = "1px solid #a00";
        return false;
    } else if (isNaN(zip)) {
        checkphonesapn.innerHTML = "<b> ZIP Code</b> field characters not allowed </br>";
        checkphone.style.border = "1px solid #a00";
        return false;
    } else {
        checkZIP.style.border = "1px solid green";
        return true;
    }
}

function validatecheckphone() {
    checkphonesapn.innerHTML = "";
    let mobile = checkphone.value;

    if (checkphone.value == "") {
        checkphonesapn.innerHTML = "<b>Phone</b> field is required </br>";
        checkphone.style.border = "1px solid #a00";

        return false;
    } else if (isNaN(mobile)) {
        checkphonesapn.innerHTML = "characters not allowed </br>";
        checkphone.style.border = "1px solid #a00";
        return false;
    } else if (mobile.length != 10) {
        checkphonesapn.innerHTML = "Enter correct mobile number </br>";
        checkphone.style.border = "1px solid #a00";
        return false;
    } else {
        checkphone.style.border = "1px solid green";
        return true;
    }
}

function validatecheckemail() {
    checkemailsapn.innerHTML = "";
    let email = checkemail.value;

    if (checkemail.value == "") {
        checkemailsapn.innerHTML = "<b>Email</b> field is required </br>";
        checkemail.style.border = "1px solid #a00";
        return false;
    } else if (!email.includes("@")) {
        checkemailsapn.innerHTML = "<b> @ is missing in email</b>";
        checkemail.style.border = "1px solid #a00";
        return false;

    } else {
        checkemail.style.border = "1px solid green";
        return true;
    }
}



function validateCheckoutForm() {

    let v1 = validatecheckfname();
    let v2 = validatechecklname();
    let v3 = validatecheckaddress();
    let v4 = validatecheckcity();
    let v5 = validatecheckZIP();
    let v6 = validatecheckphone();
    let v7 = validatecheckemail();

    if (v1 && v2 && v3 && v4 && v5 && v6 && v7) {
        // buttonnode.disabled=true;
        return true;
    } else {
        // buttonnode.disabled=false;
        return false;
    }
}
// Checkout page Validation End

// wordpress-practice
// HFDw@^B4leOEvf8w38

$(document).ready(function() {

    let progressCircle = document.querySelector(".progress");
    let radius = progressCircle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;
    progressCircle.style.strokeDasharray = circumference;


    function abcd() {
        $(window).scroll(function(e) {
            var scrollTop = $(window).scrollTop();
            var docHeight = $(document).height();
            var winHeight = $(window).height();
            var scrollPercent = (scrollTop) / (docHeight - winHeight);
            var scrollPercentRounded = Math.round(scrollPercent * 100);
            // console.log(scrollPercentRounded);
            progressCircle.style.strokeDashoffset = circumference - (scrollPercentRounded / 100) * circumference;
        });
    }
    window.addEventListener("scroll", abcd);
});


// Top Scroll btn
$("#top-scroll-btn").click(function() {

    $('html, body').animate({
        scrollTop: $('#top').offset().top
    }, 2000);
});
// Top Scroll btn End