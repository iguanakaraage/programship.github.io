$(document).ready(function () {

  var $slideshow = $('.slide');
  var $slide = $('.photo');

  function randomize(selector) {
    $slideshow.find(selector).sort(function () {
      return Math.round(Math.random()) - 0.5;
    }).detach().appendTo($slideshow);
  }

  randomize('.photo');

  $('.slide').slick({
    autoplay: true,
    speed: 2000,
    adaptiveHeight: true,
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 1,
    slideToScroll: 1,
    swipe: true,
    centerMode: true,
    centerPadding: '10%',
    arrows: false,
    fade: false,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 768, //767px以下のサイズに適用
        settings: {
          slidesToShow: 1,
          centerPadding: false
        }
      }
    ]
  });


  $(function () {
    var $win = $(window),
      $main = $('.main'),
      $nav = $('.navi'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = '.fix';

    $win.on('load scroll', function () {
      var value = $(this).scrollTop();
      if (value > navPos) {
        $nav.addClass(fixedClass);
        $main.css('margin-top', navHeight);
      } else {
        $nav.removeClass(fixedClass);
        $main.css('margin-top', '0');
      }
    });
    

    $win.on('load resize', function(){
      responsive();
    })+

    function responsive(){
      var w = $(window).width();
      if ( w <= 768 ) {
        $.fn.fullpage.setResponsive(true);
      } else {
        $.fn.fullpage.setResponsive(false);
      }
    }
  });

  $('a[href^="#"]').click(function () {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });

});

$(function () {
  $('.acdn, .acdn2').click(function () {
    $(this).toggleClass("bg02").next().slideToggle();
  });
});