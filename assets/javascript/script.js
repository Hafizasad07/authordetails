$(document).ready(function () {
        if ($(window).width() > 991){
        $('.navbar-light .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
    }
});

$(".audio-div audio").on('play',function(){
  var parent = $(this).parent();
  $(parent).toggleClass('active');
})
$(".audio-div audio").on('pause',function(){
  var parent = $(this).parent();
  $(parent).toggleClass('active');
})


jQuery(".carousel1").owlCarousel({
    autoplay: false,
    rewind: true,
    loop: false,
    /* use rewind if you don't want loop */
    margin: 0, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items:4
      }
    }
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');


// vertical carousel 

$(".next-img").click(function(){
    var img;
    var count = 0;
    var scrollTop = $(".vertical-carousel").scrollTop() + 85;
    $(".vertical-carousel").scrollTop(scrollTop);	  
})

$(".pre-img").click(function(){
  var img;
  var count = 0;
  var scrollTop = $(".vertical-carousel").scrollTop() - 85;
  $(".vertical-carousel").scrollTop(scrollTop);
})

$(".remove-btn").click(function(){
  var parent = $(this).parent().parent().parent().parent().parent();
  $(parent).remove();
});

$(".vector-icon").click(function(){
  $(this).toggleClass('active');
});

if ($(window).width() < 767) {
  $(".card-paragraph.author-detail").each(function(){
    var text = $(this).text();
    console.log(text.length);
    if (text.length > 80) {
      var finded = text.substring(0,80) + "...";
      $(this).text(finded);
    }
  })
}