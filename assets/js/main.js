//
// ///  ================ -menu-click-start- ================
// $(document).ready(function () {
//     var time = 0;
//     $('.open-menu').on('click', function () {
//         $(this).toggleClass('close-menu');
//         if (window.innerHeight < 380) {
//             // $('.sidenav').css({'overflow-y': 'auto'})
//         }
//
//         if ($(this).hasClass('close-menu')) {
//             $('.menu-cnt').addClass('transition-menu');
//             $('.menu-header-mobile').css({ 'max-width': '100%', transition: '0.3s' })
//             $('.menu-cnt').css({ width: '40%', transition: '0.4s' });
//             $('body').addClass('body_fix');
//             var menu_li = $(".sidenav>ul>li");
//
//             if (window.innerWidth < 576) {
//                 $('.menu-cnt').css({ width: '75%', transition: '0.4s' });
//             }
//
//             $(menu_li).each(function () {
//                 time++;
//                 $(this).css({ 'transition-delay': '0.' + time + 's' });
//                 $(this).addClass('anim-menu');
//             })
//         } else {
//             $('.menu-cnt').css({ width: '0%' });
//             $('body').removeClass('body_fix');
//             time = 0;
//             var menu_li = $(".sidenav ul li");
//             $(menu_li).each(function () {
//                 if ($(this).hasClass('anim-menu')) {
//                     $(this).removeClass('anim-menu');
//                 }
//             })
//         }
//     });
//
//     $('.for-mobile-bg').on('click', function () {
//         if ($('.open-menu').hasClass('close-menu')) {
//             $('.open-menu').removeClass('close-menu');
//         }
//         $('.menu-cnt').css({ width: '0%' });
//         $('body').removeClass('body_fix');
//         time = 0;
//         var menu_li = $(".sidenav ul li");
//         $(menu_li).each(function () {
//             if ($(this).hasClass('anim-menu')) {
//                 $(this).removeClass('anim-menu');
//                 $(this).css({ 'opacity': '0', transition: '0.2s' })
//             }
//         })
//     })
// })
// // =============== menu-click-end ===============
//
// //  =============== partners-slider-start ===============
// $(document).ready(function () {
//     $('.partners-slider').slick({
//         slidesToShow: 6,
//         arrows: false,
//         autoPlay: true,
//         infinite: false,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 5
//                 }
//             },
//             {
//                 breakpoint: 991,
//                 settings: {
//
//
//                     slidesToShow: 4
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//
//                     slidesToShow: 3
//                 }
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             }
//
//         ]
//
//     });
//
//
// });
// // slick slider magnific popup
// $(document).ready(function() {
// 	$('.reviews-slider-block').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 		},
//     });
// });



$(document).ready(function () {
    $(".order-slide").slick({
        arrows: true,
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });

})
