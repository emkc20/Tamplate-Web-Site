$(document).ready(function active() {
    checkCookie();
    var bolId = '';
});


/* Cookie Page */
$(document).ready(function () {
    $(".cookie-select").click(function () {
        $(".select-box").slideToggle("slow");
    });
});

$(document).ready(function () {
  $('.pro').click(function (event) {
    var tab = $(this).data('pro');
    $('.tabcontent').removeClass('d-block');
    $('#' + tab + '').addClass('d-block');
  });
})
/* END Cookie Page */

/* HISTORY */
$(document).scroll(function () {

    if ($(window).scrollTop() > 250) {
        $('.text1 h1').addClass('slideInUp');
        $('.text1 h1').addClass('opacity-1');
        $('.text1 h1').removeClass('opacity-0');

        setTimeout(function () {
            $('.text2 img').addClass('slideInUp');
            $('.text2 img').addClass('opacity-1');
            $('.text2 img').removeClass('opacity-0');
        }, 300);
    }

    if ($(window).scrollTop() > 500) {
        $('.text1 .busines-img').addClass('slideInUp');
        $('.text1 .busines-img').addClass('opacity-1');
        $('.text1 .busines-img').removeClass('opacity-0');

        setTimeout(function () {
            $('.text2 p').addClass('slideInUp');
            $('.text2 p').addClass('opacity-1');
            $('.text2 p').removeClass('opacity-0');
        }, 900);
    }

    if ($(window).scrollTop() > 1200) {
        $('.extra').addClass('slideInUp');
        $('.extra').addClass('opacity-1');
        $('.extra').removeClass('opacity-0');
    }


});
/* END HISTORY */

/* PREV */
$(document).scroll(function () {

    if ($(window).scrollTop() > 600) {

        $('.p4').addClass('fadeInUp');
        $('.p4').addClass('opacity-1');
        $('.p4').removeClass('opacity-0');

        setTimeout(function () {
            $('.p5').addClass('fadeInUp');
            $('.p5').addClass('opacity-1');
            $('.p5').removeClass('opacity-0');
        }, 300);

        setTimeout(function () {
            $('.p6').addClass('fadeInUp');
            $('.p6').addClass('opacity-1');
            $('.p6').removeClass('opacity-0');
        }, 700);
    }
});
/* END PREV */

/* PREV-DETAIL */
$(document).scroll(function () {


    if ($(window).scrollTop() > 250) {

        $('.pd1').addClass('fadeInRight');
        $('.pd1').addClass('opacity-1');
        $('.pd1').removeClass('opacity-0');

        setTimeout(function () {
            $('.pd2').addClass('fadeInRight');
            $('.pd2').addClass('opacity-1');
            $('.pd2').removeClass('opacity-0');
        }, 500);

        setTimeout(function () {
            $('.pd3').addClass('fadeInRight');
            $('.pd3').addClass('opacity-1');
            $('.pd3').removeClass('opacity-0');
        }, 600);

        setTimeout(function () {
            $('.pd4').addClass('fadeInRight');
            $('.pd4').addClass('opacity-1');
            $('.pd4').removeClass('opacity-0');
        }, 900);

        setTimeout(function () {
            $('.pd5').addClass('fadeInRight');
            $('.pd5').addClass('opacity-1');
            $('.pd5').removeClass('opacity-0');
        }, 1100);
    }

    if ($(window).scrollTop() > 350) {

        $('.pd-img').addClass('fadeInLeft');
        $('.pd-img').addClass('opacity-1');
        $('.pd-img').removeClass('opacity-0');

    }




});
/* END PREV-DETAIL */

/* PRODUCTION */
$(document).scroll(function () {


    if ($(window).scrollTop() > 370) {

        $('.works-item h1').addClass('fadeInLeft');
        $('.works-item h1').addClass('opacity-1');
        $('.works-item h1').removeClass('opacity-0');

        setTimeout(function () {
            $('.slider').addClass('fadeInRight');
            $('.slider').addClass('opacity-1');
            $('.slider').removeClass('opacity-0');
        }, 400);
    }

    if ($(window).scrollTop() > 700) {

        $('.item-1 p').addClass('fadeInLeft');
        $('.item-1 p').addClass('opacity-1');
        $('.item-1 p').removeClass('opacity-0');

        setTimeout(function () {
            $('.item-2 p').addClass('fadeInRight');
            $('.item-2 p').addClass('opacity-1');
            $('.item-2 p').removeClass('opacity-0');
        }, 600);
    }

    if ($(window).scrollTop() > 1500) {

        $('.mi-one-img1').addClass('zoomIn');
        $('.mi-one-img1').addClass('opacity-1');
        $('.mi-one-img1').removeClass('opacity-0');

        setTimeout(function () {
            $('.mi-two-img1').addClass('zoomIn');
            $('.mi-two-img1').addClass('opacity-1');
            $('.mi-two-img1').removeClass('opacity-0');
        }, 600);
    }

    if ($(window).scrollTop() > 2000) {

        $('.mi-one-text1').addClass('zoomIn');
        $('.mi-one-text1').addClass('opacity-1');
        $('.mi-one-text1').removeClass('opacity-0');

        setTimeout(function () {
            $('.mi-two-text1').addClass('zoomIn');
            $('.mi-two-text1').addClass('opacity-1');
            $('.mi-two-text1').removeClass('opacity-0');
        }, 400);
    }

    if ($(window).scrollTop() > 2500) {

        $('.mi-one-img2').addClass('zoomIn');
        $('.mi-one-img2').addClass('opacity-1');
        $('.mi-one-img2').removeClass('opacity-0');

        setTimeout(function () {
            $('.mi-two-text2').addClass('zoomIn');
            $('.mi-two-text2').addClass('opacity-1');
            $('.mi-two-text2').removeClass('opacity-0');
        }, 400);
    }

    if ($(window).scrollTop() > 2600) {

        $('.mi-one-text2').addClass('fadeInUpBig');
        $('.mi-one-text2').addClass('opacity-1');
        $('.mi-one-text2').removeClass('opacity-0');
    }



});
/* END PRODUCTION */

/* MARBEL */
$(document).ready(function () {
    $(".marbel-text h4").click(function () {
        $(".marbel-text p").slideToggle();
    });

    $(".marbel-chart-two h4").click(function () {
        $(".chart").slideToggle("slow");
    });
});
/* END MARBEL */

/* HMABURGER */
function myFunction(x) {
  x.classList.toggle("change");
}

const hammenu=document.getElementsByClassName("hamburger-menu")[0];
const mobile=document.getElementsByClassName("mobile-item")[0];
const mobilelogo=document.getElementsByClassName("mobil-logo")[0];

hammenu.addEventListener("click",goster);

function goster(e){
mobile.classList.toggle("gecis");
mobilelogo.classList.toggle("fadeInDown");
// mobile.getAttribute("transition-style") ? mobile.setAttribute('transition-style','') : mobile.setAttribute('transition-style','in:wipe:bottom-right')
// aktif edeceksen css kodunuda al!!!
}
/* end HMABURGER */


if ($(window).width() > 1290) {

    $(document).scroll(function () {

        if ($(window).scrollTop() > 50) {
            /* $('.inner-logo a').css({display: 'none'}); */
            $('.inner-logo a').css({
                opacity: '0'
            });
            $('.inner-logo a').removeClass('fadeInDown');


        } else {
            /* $('.inner-logo a').css({display: 'block'}); */
            $('.inner-logo a').css({
                opacity: '1'
            });
            $('.inner-logo a').addClass('fadeInDown');
        }

        if ($(window).scrollTop() > 60) {

            $('.navbar-menu-2').css({display: 'flex'});
            $('.navbar-menu-2').addClass('fadeInDown');
            $('.navbar-menu-2').removeClass('fadeOutUp');
        } else {
            /*  $('.navbar-menu-2').css({display: 'none'}); */
            $('.navbar-menu-2').removeClass('fadeInDown');
            $('.navbar-menu-2').addClass('fadeOutUp');
        }

        if ($(window).scrollTop() > 200) {
            $('.main-text').addClass('slideInUp');
            $('.main-text').addClass('opacity-1');
            $('.main-text').removeClass('opacity-0');
        }


        if ($(window).scrollTop() > 500) {
            $('.main-pic').addClass('fadeInUp');
            $('.main-pic').addClass('opacity-1');
            $('.main-pic').removeClass('opacity-0');

            setTimeout(function () {
                $('.main-pic img').addClass('fadeInUp');
                $('.main-pic img').addClass('opacity-1');
                $('.main-pic img').removeClass('opacity-0');
            }, 350);
        }
        if ($(window).scrollTop() > 1400) {
            $('.prodouct').addClass('fadeInUp');
            $('.main-pic img').addClass('opacity-1');
            $('.main-pic img').removeClass('opacity-0');
        }

        if ($(window).scrollTop() > 1500) {
            $('.d1').addClass('fadeInUp');
            $('.d1').addClass('opacity-1');
            $('.d1').removeClass('opacity-0');
        }

        if ($(window).scrollTop() > 1900) {
            setTimeout(function () {
                $('.p1').addClass('slideInUp');
                $('.p1').addClass('opacity-1');
                $('.p1').removeClass('opacity-0');
            }, 520);
        }

        if ($(window).scrollTop() > 2500) {
            $('.d2').addClass('fadeInUp');
            $('.d2').addClass('opacity-1');
            $('.d2').removeClass('opacity-0');
        }

        if ($(window).scrollTop() > 2800) {
            setTimeout(function () {
                $('.p2').addClass('slideInUp');
                $('.p2').addClass('opacity-1');
                $('.p2').removeClass('opacity-0');
            }, 520);
        }


        if ($(window).scrollTop() > 3500) {
            $('.t1').addClass('fadeIn');
            $('.t1').addClass('opacity-1');
            $('.t1').removeClass('opacity-0');

            setTimeout(function () {
                $('.s1').addClass('fadeInUp');
                $('.s1').addClass('opacity-1');
                $('.s1').removeClass('opacity-0');
            }, 700);

            $('.custom-list-group').addClass('fadeInUp');
            $('.custom-list-group').addClass('opacity-1');
            $('.custom-list-group').removeClass('opacity-0');
        }

        if ($(window).scrollTop() > 4430) {
            $('.t2').addClass('fadeIn');
            $('.t2').addClass('opacity-1');
            $('.t2').removeClass('opacity-0');

            setTimeout(function () {
                $('.s2').addClass('fadeInUp');
                $('.s2').addClass('opacity-1');
                $('.s2').removeClass('opacity-0');
            }, 600);

        }

        if ($(window).scrollTop() > 5173) {
            $('.t3').addClass('fadeIn');
            $('.t3').addClass('opacity-1');
            $('.t3').removeClass('opacity-0');

            setTimeout(function () {
                $('.s3').addClass('fadeInUp');
                $('.s3').addClass('opacity-1');
                $('.s3').removeClass('opacity-0');
            }, 600);

        }

        if ($(window).scrollTop() > 5873) {
            $('.t4').addClass('fadeIn');
            $('.t4').addClass('opacity-1');
            $('.t4').removeClass('opacity-0');

            setTimeout(function () {
                $('.s4').addClass('fadeInUp');
                $('.s4').addClass('opacity-1');
                $('.s4').removeClass('opacity-0');
            }, 600);

        }

        if ($(window).scrollTop() > 6670) {
            $('.t5').addClass('fadeIn');
            $('.t5').addClass('opacity-1');
            $('.t5').removeClass('opacity-0');

            setTimeout(function () {
                $('.s5').addClass('fadeInUp');
                $('.s5').addClass('opacity-1');
                $('.s5').removeClass('opacity-0');
            }, 600);

        }


        if ($(window).scrollTop() > 7295) {
            $('.t6').addClass('fadeIn');
            $('.t6').addClass('opacity-1');
            $('.t6').removeClass('opacity-0');

            setTimeout(function () {
                $('.s6').addClass('fadeInUp');
                $('.s6').addClass('opacity-1');
                $('.s6').removeClass('opacity-0');
            }, 600);

        }

        if ($(window).scrollTop() > 8200) {
            $('.busines-img').addClass('fadeInLeft');
            $('.busines-img').addClass('opacity-1');
            $('.busines-img').removeClass('opacity-0');

            setTimeout(function () {
                $('.busines-text h2').addClass('fadeInRight');
                $('.busines-text h2').addClass('opacity-1');
                $('.busines-text h2').removeClass('opacity-0');
            }, 200);

            setTimeout(function () {
                $('.parca').addClass('fadeInRight');
                $('.parca').addClass('opacity-1');
                $('.parca').removeClass('opacity-0');
            }, 600);
        }

        if ($(window).scrollTop() > 9200) {
            $('.title-prev h2').addClass('fadeInDown');
            $('.title-prev h2').addClass('opacity-1');
            $('.title-prev h2').removeClass('opacity-0');

            setTimeout(function () {
                $('.pi1').addClass('fadeInLeft');
                $('.pi1').addClass('opacity-1');
                $('.pi1').removeClass('opacity-0');
            }, 200);

            setTimeout(function () {
                $('.pi2').addClass('fadeInRight');
                $('.pi2').addClass('opacity-1');
                $('.pi2').removeClass('opacity-0');
            }, 600);
        }
    });


    function animation() {
        var controller = new ScrollMagic.Controller();

        const t1 = gsap.timeline({
            defaults: {
                ease: Power1.easeOut

            }
        });

        t1.fromTo(".intro-pic", 2, {}, {
            width: "65%",
            height: "92%",
            delay: .5
        });

        t1.fromTo(
            ".intro-logo",
            1, {
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
            },
            "-=.5"
        );

        t1.fromTo(".navbar-list-item", 1, {
                x: "-1rem",
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                stagger: 0.1
            },
            "-=1"
        );

        t1.fromTo(
            ".as",
            1, {
                opacity: 0
            }, {
                opacity: 1,
                stagger: 0.1
            },
            "-=1"
        );

    }


}

if ($(window).width() < 1290) {

    $(document).scroll(function () {

        if ($(window).scrollTop() > 50) {
            /* $('.inner-logo a').css({display: 'none'}); */
            $('.inner-logo a').css({opacity: '0'});
            $('.inner-logo a').removeClass('fadeInDown');


        } else {
            /* $('.inner-logo a').css({display: 'block'}); */
            $('.inner-logo a').css({
                opacity: '1'
            });
            $('.inner-logo a').addClass('fadeInDown');


        }

        if ($(window).scrollTop() > 60) {

            $('.navbar-menu-2').css({
                display: 'flex'
            });
            $('.navbar-menu-2').addClass('fadeInDown');
            $('.navbar-menu-2').removeClass('fadeOutUp');
        } else {
            /*  $('.navbar-menu-2').css({display: 'none'}); */
            $('.navbar-menu-2').removeClass('fadeInDown');
            $('.navbar-menu-2').addClass('fadeOutUp');
        }

        if ($(window).scrollTop() > 200) {
            $('.main-text').addClass('slideInUp');
            $('.main-text').addClass('opacity-1');
            $('.main-text').removeClass('opacity-0');

        }


        if ($(window).scrollTop() > 500) {
            $('.main-pic').addClass('fadeInUp');
            $('.main-pic').addClass('opacity-1');
            $('.main-pic').removeClass('opacity-0');

            setTimeout(function () {
                $('.main-pic img').addClass('fadeInUp');
                $('.main-pic img').addClass('opacity-1');
                $('.main-pic img').removeClass('opacity-0');
            }, 250);
        }
        if ($(window).scrollTop() > 1400) {
            $('.prodouct').addClass('fadeInUp');
            $('.main-pic img').addClass('opacity-1');
            $('.main-pic img').removeClass('opacity-0');
        }

        if ($(window).scrollTop() > 1500) {
            $('.d1').addClass('fadeInUp');
            $('.d1').addClass('opacity-1');
            $('.d1').removeClass('opacity-0');
        }

        if ($(window).scrollTop() > 1900) {
            setTimeout(function () {
                $('.p1').addClass('slideInUp');
                $('.p1').addClass('opacity-1');
                $('.p1').removeClass('opacity-0');
            }, 520);
        }

        if ($(window).scrollTop() > 2500) {
            $('.d2').addClass('fadeInUp');
            $('.d2').addClass('opacity-1');
            $('.d2').removeClass('opacity-0');
        }

        if ($(window).scrollTop() > 2800) {
            setTimeout(function () {
                $('.p2').addClass('slideInUp');
                $('.p2').addClass('opacity-1');
                $('.p2').removeClass('opacity-0');
            }, 520);
        }


        if ($(window).scrollTop() > 3500) {
            $('.t1').addClass('fadeIn');
            $('.t1').addClass('opacity-1');
            $('.t1').removeClass('opacity-0');

            setTimeout(function () {
                $('.s1').addClass('fadeInUp');
                $('.s1').addClass('opacity-1');
                $('.s1').removeClass('opacity-0');
            }, 700);

            $('.custom-list-group').addClass('fadeInUp');
            $('.custom-list-group').addClass('opacity-1');
            $('.custom-list-group').removeClass('opacity-0');
        }

        if ($(window).scrollTop() > 4430) {
            $('.t2').addClass('fadeIn');
            $('.t2').addClass('opacity-1');
            $('.t2').removeClass('opacity-0');

            setTimeout(function () {
                $('.s2').addClass('fadeInUp');
                $('.s2').addClass('opacity-1');
                $('.s2').removeClass('opacity-0');
            }, 600);

        }

        if ($(window).scrollTop() > 5173) {
            $('.t3').addClass('fadeIn');
            $('.t3').addClass('opacity-1');
            $('.t3').removeClass('opacity-0');

            setTimeout(function () {
                $('.s3').addClass('fadeInUp');
                $('.s3').addClass('opacity-1');
                $('.s3').removeClass('opacity-0');
            }, 600);

        }

        if ($(window).scrollTop() > 5873) {
            $('.t4').addClass('fadeIn');
            $('.t4').addClass('opacity-1');
            $('.t4').removeClass('opacity-0');

            setTimeout(function () {
                $('.s4').addClass('fadeInUp');
                $('.s4').addClass('opacity-1');
                $('.s4').removeClass('opacity-0');
            }, 600);

        }

        if ($(window).scrollTop() > 6670) {
            $('.t5').addClass('fadeIn');
            $('.t5').addClass('opacity-1');
            $('.t5').removeClass('opacity-0');

            setTimeout(function () {
                $('.s5').addClass('fadeInUp');
                $('.s5').addClass('opacity-1');
                $('.s5').removeClass('opacity-0');
            }, 600);

        }


        if ($(window).scrollTop() > 7295) {
            $('.t6').addClass('fadeIn');
            $('.t6').addClass('opacity-1');
            $('.t6').removeClass('opacity-0');

            setTimeout(function () {
                $('.s6').addClass('fadeInUp');
                $('.s6').addClass('opacity-1');
                $('.s6').removeClass('opacity-0');
            }, 600);

        }

        if ($(window).scrollTop() > 8200) {
            $('.busines-img').addClass('fadeInLeft');
            $('.busines-img').addClass('opacity-1');
            $('.busines-img').removeClass('opacity-0');

            setTimeout(function () {
                $('.busines-text h2').addClass('fadeInRight');
                $('.busines-text h2').addClass('opacity-1');
                $('.busines-text h2').removeClass('opacity-0');
            }, 200);

            setTimeout(function () {
                $('.parca').addClass('fadeInRight');
                $('.parca').addClass('opacity-1');
                $('.parca').removeClass('opacity-0');
            }, 600);
        }

        if ($(window).scrollTop() > 9821) {
            $('.title-prev h2').addClass('fadeInDown');
            $('.title-prev h2').addClass('opacity-1');
            $('.title-prev h2').removeClass('opacity-0');

            setTimeout(function () {
                $('.pi1').addClass('fadeInLeft');
                $('.pi1').addClass('opacity-1');
                $('.pi1').removeClass('opacity-0');
            }, 200);

            setTimeout(function () {
                $('.pi2').addClass('fadeInRight');
                $('.pi2').addClass('opacity-1');
                $('.pi2').removeClass('opacity-0');
            }, 600);
        }
    });


    function animation() {
        var controller = new ScrollMagic.Controller();

        const t1 = gsap.timeline({
            defaults: {
                ease: Power1.easeOut

            }
        });

        t1.fromTo(".intro-pic", 2, {}, {
            width: "60%",
            height: "91.5%",
            delay: .5
        });

        t1.fromTo(
            ".intro-logo",
            1, {
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
            },
            "-=.5"
        );

        t1.fromTo(".navbar-list-item", 1, {
                x: "-1rem",
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                stagger: 0.1
            },
            "-=1"
        );

        t1.fromTo(
            ".as",
            1, {
                opacity: 0
            }, {
                opacity: 1,
                stagger: 0.1
            },
            "-=1"
        );

    }


}

if ($(window).width() < 1025) {

    $(document).scroll(function () {

        if ($(window).scrollTop() > 50) {
            $('.inner-logo a').removeClass('fadeInDown');
            $('.inner-logo a').addClass('fadeOutUp');

        } else {
            $('.inner-logo a').addClass('fadeInDown');
            $('.inner-logo a').removeClass('fadeOutUp');
        }

          if ($(window).scrollTop() > 50) {
            $('.mobile').css({background: "#3A3C41"});
            $('.mobile').addClass('fadeInDown');
            $('.mobile h1').css({display:"block"});
            /* $('.mobil-logo').css({display:"none"}); */
    
        } else {
            $('.mobile').css({background: "none"});
            $('.mobile').css({transition: "1s"});
            $('.mobile h1').css({transition: "1s"});
            $('.mobile h1').css({display:"none"});
            /*  $('.mobil-logo').css({display:"block"}); */
        } 





        if ($(window).scrollTop() > 60) {

            $('.navbar-menu-2').css({ display: 'flex'});
            $('.navbar-menu-2').addClass('fadeInDown');
            $('.navbar-menu-2').removeClass('fadeOutUp');
        } else {
            /*  $('.navbar-menu-2').css({display: 'none'}); */
            $('.navbar-menu-2').removeClass('fadeInDown');
            $('.navbar-menu-2').addClass('fadeOutUp');
        }

        if ($(window).scrollTop() > 200) {
            $('.main-text').addClass('slideInUp');
            $('.main-text').addClass('opacity-1');
            $('.main-text').removeClass('opacity-0');

        }


        if ($(window).scrollTop() > 500) {
            $('.main-pic').addClass('fadeInUp');
            $('.main-pic').addClass('opacity-1');
            $('.main-pic').removeClass('opacity-0');

            setTimeout(function () {
                $('.main-pic img').addClass('fadeInUp');
                $('.main-pic img').addClass('opacity-1');
                $('.main-pic img').removeClass('opacity-0');
            }, 250);
        }
        if ($(window).scrollTop() > 1400) {
            $('.prodouct').addClass('fadeInUp');
            $('.main-pic img').addClass('opacity-1');
            $('.main-pic img').removeClass('opacity-0');
        }

        if ($(window).scrollTop() > 1401) {
            $('.d1').addClass('fadeInUp');
            $('.d1').addClass('opacity-1');
            $('.d1').removeClass('opacity-0');
        }

        if ($(window).scrollTop() > 1450) {
            setTimeout(function () {
                $('.p1').addClass('slideInUp');
                $('.p1').addClass('opacity-1');
                $('.p1').removeClass('opacity-0');
            }, 400);
        }

        if ($(window).scrollTop() > 2500) {
            $('.d2').addClass('fadeInUp');
            $('.d2').addClass('opacity-1');
            $('.d2').removeClass('opacity-0');
        }

        if ($(window).scrollTop() > 2800) {
            setTimeout(function () {
                $('.p2').addClass('slideInUp');
                $('.p2').addClass('opacity-1');
                $('.p2').removeClass('opacity-0');
            }, 520);
        }


        if ($(window).scrollTop() > 100000) {
            $('.t1').addClass('fadeIn');
            $('.t1').addClass('opacity-1');
            $('.t1').removeClass('opacity-0');

            setTimeout(function () {
                $('.s1').addClass('fadeInUp');
                $('.s1').addClass('opacity-1');
                $('.s1').removeClass('opacity-0');
            }, 700);

            $('.custom-list-group').addClass('fadeInUp');
            $('.custom-list-group').addClass('opacity-1');
            $('.custom-list-group').removeClass('opacity-0');
        }

        if ($(window).scrollTop() > 5430) {
            $('.t2').addClass('fadeIn');
            $('.t2').addClass('opacity-1');
            $('.t2').removeClass('opacity-0');

            setTimeout(function () {
                $('.s2').addClass('fadeInUp');
                $('.s2').addClass('opacity-1');
                $('.s2').removeClass('opacity-0');
            }, 600);

        }

        if ($(window).scrollTop() > 5503) {
            $('.t3').addClass('fadeIn');
            $('.t3').addClass('opacity-1');
            $('.t3').removeClass('opacity-0');

            setTimeout(function () {
                $('.s3').addClass('fadeInUp');
                $('.s3').addClass('opacity-1');
                $('.s3').removeClass('opacity-0');
            }, 600);

        }

        if ($(window).scrollTop() > 5873) {
            $('.t4').addClass('fadeIn');
            $('.t4').addClass('opacity-1');
            $('.t4').removeClass('opacity-0');

            setTimeout(function () {
                $('.s4').addClass('fadeInUp');
                $('.s4').addClass('opacity-1');
                $('.s4').removeClass('opacity-0');
            }, 600);

        }

        if ($(window).scrollTop() > 6670) {
            $('.t5').addClass('fadeIn');
            $('.t5').addClass('opacity-1');
            $('.t5').removeClass('opacity-0');

            setTimeout(function () {
                $('.s5').addClass('fadeInUp');
                $('.s5').addClass('opacity-1');
                $('.s5').removeClass('opacity-0');
            }, 600);

        }


        if ($(window).scrollTop() > 7295) {
            $('.t6').addClass('fadeIn');
            $('.t6').addClass('opacity-1');
            $('.t6').removeClass('opacity-0');

            setTimeout(function () {
                $('.s6').addClass('fadeInUp');
                $('.s6').addClass('opacity-1');
                $('.s6').removeClass('opacity-0');
            }, 600);

        }

        if ($(window).scrollTop() > 8200) {
            $('.busines-img').addClass('fadeInLeft');
            $('.busines-img').addClass('opacity-1');
            $('.busines-img').removeClass('opacity-0');

            setTimeout(function () {
                $('.busines-text h2').addClass('fadeInRight');
                $('.busines-text h2').addClass('opacity-1');
                $('.busines-text h2').removeClass('opacity-0');
            }, 200);

            setTimeout(function () {
                $('.parca').addClass('fadeInRight');
                $('.parca').addClass('opacity-1');
                $('.parca').removeClass('opacity-0');
            }, 600);
        }

        if ($(window).scrollTop() > 9821) {
            $('.title-prev h2').addClass('fadeInDown');
            $('.title-prev h2').addClass('opacity-1');
            $('.title-prev h2').removeClass('opacity-0');

            setTimeout(function () {
                $('.pi1').addClass('fadeInLeft');
                $('.pi1').addClass('opacity-1');
                $('.pi1').removeClass('opacity-0');
            }, 200);

            setTimeout(function () {
                $('.pi2').addClass('fadeInRight');
                $('.pi2').addClass('opacity-1');
                $('.pi2').removeClass('opacity-0');
            }, 600);
        }
    });


    function animation() {
        var controller = new ScrollMagic.Controller();

        const t1 = gsap.timeline({
            defaults: {
                ease: Power1.easeOut

            }
        });

        t1.fromTo(".intro-pic", 2, {
            scale:".5"
        }, {
            width: "100%",
            height: "100%",
            delay: .5,
            scale:"1"
        });

        t1.fromTo(
            ".intro-logo",
            1, {
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
            },
            "-=.5"
        );
        t1.fromTo(".navbar-list-item", 1, {
                x: "-1rem",
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                stagger: 0.1
            },
            "-=1"
        );
        t1.fromTo(
            ".as",
            1, {
                opacity: 0
            }, {
                opacity: 1,
                stagger: 0.1
            },
            "-=1"
        );
    }
}
animation();

/* CEREZ */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    cname = "cookie_alert";
    exdays = 30;
    cvalue = "true";
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    /*  $("#cerez").css("display", "none");  */
       $('#cerez').addClass('fadeOutDown');
    
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var cookie_alert = getCookie("cookie_alert");
    if (cookie_alert != "") {
         $("#cerez").css("display", "none");
      
    } else {
        $("#cerez").css("display", "flex");
        $('#cerez').addClass('fadeInUp');
    }
}
/* END - CEREZ */
  $(document).ready(function () {

    $(".dropdownn").hover(function ()  {
        
        $('.menu-area ul').addClass('fadeInUp');
    });


});

$(document).ready(function () {
  if ($(".dropdownn").hover(function(){
      
  })) {
    $('.menu-area ul').addClass('fadeInUp');
  } else {
   $('.menu-area ul').removeClass('fadeInUp');
  }
 });
/* END - HAMBURGER */





