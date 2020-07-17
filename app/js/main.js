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


});

var relationship = new Swiper('.all-projects__row .swiper-container', {

  // watchSlidesVisibility: true,
  // watchSlidesProgress: true,
  slidesPerColumn: 5,
  slidesPerView: 6,
  loop: false,
  // breakpoints: {
    
  //   320: {
  //     slidesPerView: 1,
  //   },

  //   400: {
  //     slidesPerView: 2,
  //   },
    
  //   530: {
  //     slidesPerView: 3,
  //   },

  //   710: {
  //     slidesPerView: 4,
  //   },
    
  //   1024: {
  //     slidesPerView: 6,
  //   }
  // }
//   navigation: {
//     nextEl: $(this).parent().find('.swiper-button-next'),
//     prevEl: $(this).parent().find('.swiper-button-prev'),
// },


});
  
     $(".numbox").mask("+7 (999) 999 99 99");
  
  



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

$(".principle-of-work__show-more").click(function(){
  $(this).toggleClass("js-active");
  $(this).parent().toggleClass("js-active");
});

