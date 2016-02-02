// Runs scripts
$(document).ready(function(){

  console.log("Hi! If yoy're interested in code, you can take a look at thit site's repository on github https://github.com/kryshtopa/Portfolio.git");

  contactForm.init();
  lightbox.init();
  colorSwitch.init();
  fontSlider.init();
  stickyNavBar.init();
  gentleNav.init();

});


// Popup window of contact form
var contactForm = (function () {

  var init = function () {
    _setUpListners();
  };

  var _setUpListners = function () {
    $('.slide-in__content_message').on('click', _showModal);
  };

  var _showModal = function (event) {
    event.preventDefault();

    var divPopup = $('.contacts__contact-form_popup'),
        form = divPopup.find('.contact-form');

    divPopup.bPopup({
      speed: 300,
      transition: 'slideIn',
      transitionClose: 'slideBack',
      onClose: function () {
        form.trigger("reset");
      }
    });
  };

  return {
    init : init
  };

})();


// Lightbox
var lightbox = (function() {

  var init = function () {
    $('.works__link').on('click', function(e){
      e.preventDefault();

      var container = $(this).closest('.works__item'),
          image = container.find('.works__img'),
          src = image.attr('src');

      $(this).attr('href', src);

    });
  }

  return {
    init : init
  };

}());


// Font size change with slider
var fontSlider = (function() {
  var init = function () {
    $("#slider")
        .slider({
          max: 2,
          min: -2,
          value: 0,
          slide: function( event, ui ) {
            $(".p__slider").html("<p>" + ui.value + "</p>");
            $(".greeting__h1").css("font-size", 60 + ui.value*2 );
            $(".greeting__h2").css("font-size", 25 +ui.value*2 );
            $(".index__h2").css("font-size", 40 +ui.value*2 );
            $(".about__text").css("font-size", 15 +ui.value );
            $(".price__text").css("font-size", 15 +ui.value );
            $(".works__text").css("font-size", 13 +ui.value );
            $(".index__text").css("font-size", 15 +ui.value );
          }
        })
        .slider("pips", {
          first: "pip",
          last: "pip"
        });
  }

  return {
    init : init
  };

}());


// Colors switch
var colorSwitch = (function() {

  var init = function () {
    _setUpListners();
  };

  var _setUpListners = function () {
    $('.color-switch__item').on('click', _colors);
  };

  var _colors = function () {
    var color = $(this).css("background-color");

    $('.site-header').css("background-color", color);
    $('.slide-in').hover(
      function() {
        $(this).css("background-color","green")
      },
      function() {
        $(this).css("background-color", color)
      }
    );
    $('.slide-in').css("background-color", color);
    $('.slide-in__content_colors').css("color", color);
    $('.site-footer').css("background-color", color);
  }

  return {
    init : init
  };

}());


// Sticky navigation bar
var stickyNavBar = (function() {

  var init = function () {
    var stickyNavTop = $('.site-header__navigation').offset().top;

    var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
        $('.site-header__navigation').addClass('sticky');
        $('.slide-in_message').css({"top": "88px"});
    } else {
        $('.site-header__navigation').removeClass('sticky');
        $('.slide-in_message').css({"top": "25px"})
    }
    };

    $(window).scroll(function() {
      stickyNav();
    });
  }

  return {
    init : init
  };

}());


// Плавная навигация
var gentleNav = (function() {

  var init = function () {
    $('a[href*=#]').bind('click', function(e) {
      e.preventDefault();

      var target = $(this).attr("href");

      $('html, body').stop().animate({ scrollTop: $(target).offset().top-60}, 700, function() {
        location.hash = target;
      });

      return false;
    });
  }

  return {
    init : init
  };

}());
