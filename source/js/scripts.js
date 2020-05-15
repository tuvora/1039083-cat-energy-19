// Бургер меню
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

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
  var myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
      zoom: 17
    }),

    myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [113, 106],
      iconImageOffset: [-56, -106]
    });

  myMap.geoObjects
    .add(myPlacemark)
});

// Валидация форм

function validate(form_id,email) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = document.forms[programm-form].elements[owner-contact-email].value;
   if(reg.test(address) == false) {
      alert('Введите корректный e-mail');
      address.classList.add('user-form__field--error');
      return false;
   }
}
