// Бургер меню
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (!navMain.classList.contains('main-nav--opened')) {
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
  }
});

// Карта
ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
      zoom: 17
    }),

    myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-pin.png',
      iconImageSize: [113, 106],
      iconImageOffset: [-56, -106]
    });

  myMap.geoObjects
    .add(myPlacemark)
});
