var relationship = new Swiper('.relationship__slider .swiper-container', {
    spaceBetween: 36,
    slidesPerView: 'auto',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    

  });

  $('.about__slider .swiper-container').each(function(){
    var about = new Swiper(this, {
      spaceBetween: 36,
      slidesPerView: 'auto',
    navigation: {
        nextEl: $(this).parent().find('.swiper-button-next'),
        prevEl: $(this).parent().find('.swiper-button-prev'),
    },
    
 
});
});

var relationship = new Swiper('.reviews__slider .swiper-container', {

  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: $(this).parent().find('.swiper-button-next'),
    prevEl: $(this).parent().find('.swiper-button-prev'),
},


});

var relationship = new Swiper('.expertise__slider .swiper-container', {

  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slidesPerView: 'auto',
  spaceBetween: 36,
//   navigation: {
//     nextEl: $(this).parent().find('.swiper-button-next'),
//     prevEl: $(this).parent().find('.swiper-button-prev'),
// },

//  breakpoints: {
//     550: {
//       slidesPerView: ,
//     },
        
//     1024: {
//       slidesPerView: '4',
//     }
//   }

});

var swiper = new Swiper('.all-projects__row .swiper-container', {

  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slidesPerColumn: 5,
  slidesPerColumnFill: 'row',
  slidesPerView: 6,
  breakpoints: {
    
    320: {
      slidesPerView: 1,
      slidesPerColumn: 4,
    },

    400: {
      slidesPerView: 2,
    },
    
    600: {
      slidesPerView: 3,
    },

    710: {
      slidesPerView: 4,
    },
    
    1024: {
      slidesPerView: 6,
      slidesPerColumn: 5,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},


});
  
     $(".numbox").mask("+7 (999) 999 99 99");
     $(".demo__input").mask("+7 (999) 999 99 99");
  
  



$(".call-button").click(function(){
  $("#callback-modal").arcticmodal();
});
$(".selection-button").click(function(){
  $("#selection-modal").arcticmodal();
});

$(".characteristic-item__head").click(function(){
  $(".characteristic-item").removeClass("active")
  $(this).parent().addClass("active");
  $(".characteristic-item__body").fadeOut();
  $(this).next().slideToggle();
});
$(".characteristic-item__close").click(function(){
  $(this).parent().slideToggle();
});

$(".burger").click(function(){
  $(".body").toggleClass("js-hiddeb");
  $(this).toggleClass("js-active");
  $(".menu").slideToggle();
});


windowSize = $(window).width(); 
$(window).on('resize', function(event){
  windowSize = $(window).width(); 
});



  $(".menu-item__title").on('click', function(){

  
    if(windowSize < 1025){
    if ($(this).hasClass("js-active")) {
        $(this).removeClass("js-active");
        $(this).next().removeClass("js-active");
        $(this).next().slideToggle();
        
    } else {
      
      $(this).closest(".menu").find("ul.js-active").slideToggle();
      $(this).closest(".menu").find("ul.js-active").removeClass("js-active");
      $(".menu-item__title").removeClass("js-active");
      $(this).addClass("js-active");
      $(this).next().addClass("js-active");
      $(this).next().slideToggle();
    }
    }  
  });

