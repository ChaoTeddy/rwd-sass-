
$(document).ready(function () {
    // Layout js
    $('.menu-button').click(function (e) { 
        e.preventDefault();
        $('.mobile-menu').toggleClass('active');
        $('.container-right').toggleClass('active');
    });
    $('.mobile-menu-wrap').click(function (e) { 
        $(this).find('ul').slideToggle();
        $(this).siblings().find('ul').slideUp();
    });
    $('.pc-menu-wrap').click(function (e) { 
        $(this).find('ul').slideToggle();
        $(this).siblings().find('ul').slideUp();
    });



    // swiper


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        effect:'cube',
        direction: 'horizontal',
        longSwipesMs:1000,
        grabCursor:true,
        centeredSlides:true,

      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });


    // cart  link-mark
    $('.like-mark').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');

    });
});