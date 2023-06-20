$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    arrows: false,
    prevArrow: ".prev-arrow",
    nextArrow: ".next-arrow",
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  });

  $(".prev-arrow").click(function () {
    $(".slider").slick("slickPrev");
});

$(".next-arrow").click(function () {
    $(".slider").slick("slickNext");
});


$('.near-you-slider').slick({
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    arrows: false,
    prevArrow: ".prev-arrow-near",
    nextArrow: ".next-arrow-near",
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    ]
  });
  $(".prev-arrow-near").click(function () {
    $(".near-you-slider").slick("slickPrev");
});

$(".next-arrow-near").click(function () {
    $(".near-you-slider").slick("slickNext");
});


// $(".prev-arrow-near").addClass("slick-disabled");
// $("#near-you .slick-list").on("afterChange", function () {
//     console.log('change');
   
// });

	
$(".prev-arrow-near").addClass("slick-disabled");
$(".slick-list").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
        $(".prev-arrow-near").addClass("slick-disabled");
    } else {
        $(".prev-arrow-near").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
        $(".next-arrow-near").addClass("slick-disabled");
    } else {
        $(".next-arrow-near").removeClass("slick-disabled");
    }
});

// let cover = document.querySelector(".cover");

// cover.addEventListener('mouseenter', function (e) {
//     cover.classList.add('active');
// });
// cover.addEventListener('mouseleave', function () {
//     cover.classList.remove('active');
// })
$('.discover-slider').slick({
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    ]
  });
//hover effect on Porsche social 
$('.cover').mouseenter(function () {
    $(this).addClass('active');
})
$('.cover').mouseleave(function () {
    $(this).removeClass('active');
})

$('.social-left').mouseenter(function () {
    $(this).addClass('left-active');
})
$('.social-left').mouseleave(function () {
    $(this).removeClass('left-active');
})

$('.social-right').mouseenter(function () {
    $(this).addClass('right-active');
})
$('.social-right').mouseleave(function () {
    $(this).removeClass('right-active');
})

// let left = document.querySelector(".social-left");

// left.addEventListener('mouseenter', function (e) {
//     left.classList.add('left-active');
// });
// left.addEventListener('mouseleave', function () {
//     left.classList.remove('left-active');
// })

// let right = document.querySelector(".social-right");

// right.addEventListener('mouseenter', function (e) {
//     right.classList.add('right-active');
// });
// right.addEventListener('mouseleave', function () {
//     right.classList.remove('right-active');
// })

// let container = document.querySelector(".select-container");
// let popup = document.querySelector(".popup");

// container.addEventListener('click', function (e) {
//     popup.classList.toggle('active');
// });

$('.select-container').click(function () {
    console.log('hello');
    $('.popup').toggleClass('active');
})


// $('footer').click(function () {
//     console.log('hellor');
//     $('.popup').removeClass('active');
// })

// let hamburger = document.querySelector(".hamburger-container");
// let menu = document.querySelector(".menu-nav");
// let close = document.querySelector(".close");

// hamburger.addEventListener('click', function (e) {
//     menu.classList.add('menu-active');
// });

// close.addEventListener('click', function (e) {
//     menu.classList.remove('menu-active');
// });

$('.hamburger-container').click(function () {
    $('.menu-nav').addClass('menu-active');
    $('.menu-bg-color').addClass('menu-bg-color-active');
})

$('.close').click(function () {
    $('.menu-nav').removeClass('menu-active');
    $('.menu-nav-left').removeClass('left-menu-active');
    $('.menu-bg-color').removeClass('menu-bg-color-active');
})

$('.right-arrow-menu').click(function () {
    $('.menu-nav-left').addClass('left-menu-active');
})

$("#menu-container .left a").on('click', function() {


    $("#menu-container .left a").removeClass('active');
    $(this).addClass('active')

    let clicked_menu = $(this).data('id');

    $("#menu-container .right").removeClass('right-active');
    $(`#${clicked_menu}`).addClass('right-active');
    $('.menu-nav-left').removeClass('left-menu-active');

})