// Модальное окно формы обратной связи
var contactForm = (function () {

  var init = function () {
    _setUpListners();
  };

  // Прослушка событий
  var _setUpListners = function () {
    $('.slide-in__content_message').on('click', _showModal);
  };

  // Работает с модальным окном
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


// Лайтбокс
var lightbox = (function() {

  var init = function () {
    $('.photoPopLink').on('click', function(e){
      e.preventDefault();

      var container = $(this).closest('.photoPopItem'),
          image = container.find('.photoPopImg'),
          src = image.attr('src');

      $(this).attr('href', src);

    });
  }

  return {
    init : init
  };

}());


// Изменение размеров картинок на главной странице
var imageSize = (function() {

  var init = function () {
    var image = $('.photo-gallery__link'),
        windowWidth = $(window).width()
        imageSize = imageSize;

    if (windowWidth > 1250 ) {
      imageSize = windowWidth/6 + "px";
    } else {
      imageSize = "208px";
    }

    image.css({"width": imageSize, "height": imageSize });

  };

  return {
    init : init
  };

}());


// Динамическое изменение размеров картинок на главной странице
var imageResize = (function() {

  var init = function () {
    $(window).resize(function(){
      var image = $('.photo-gallery__link'),
          windowWidth = $(window).width()
          imageSize = imageSize;

      if (windowWidth > 1250 ) {
        imageSize = windowWidth/6 + "px";
        $('.photo-gallery__list').css({"margin-left": ""});
      } else {
        imageSize = "208px";
      }

      image.css({"width": imageSize, "height": imageSize });
    });
  };

  return {
    init : init
  };

}());


// Яндекс Карта
function init(){

  myMap = new ymaps.Map("howToGetMap", {
      center: [51.402412, 86.030271],
      zoom: 14
  });

  myPlacemark = new ymaps.Placemark([55.76, 37.64], {
      hintContent: 'Москва!',
      balloonContent: 'Столица России'
  });

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Малиновый Остров',
          balloonContent: 'Чемал'
      }, {
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'images/icons/map-tag.png',
          // Размеры метки.
          iconImageSize: [45, 61],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-3, -42]
      });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}

// Запускает скрипты
$(document).ready(function(){

  contactForm.init();
  lightbox.init();

  // Проверяет необходимость запуска скриптов изменения размеров картинок
  if($('.photo-gallery__link')[0]) {
    imageSize.init();
    imageResize.init();
  }

  // Проверяет необходимость запуска карты
  if($('#howToGetMap')[0]) {
    ymaps.ready(init);
    var myMap,
    myPlacemark;
  }
});
