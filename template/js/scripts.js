function editNameCity(name) {
    $('span.main__textCity')[0].textContent = name;
    $('div.header__cityName')[0].textContent = name;
}

function editColorCities(el) {
    //el.parentElement;

    $('.header-city-list__item').each(
        function (index, element) {
            element.removeAttribute('style');
            element.style.color = '#FFFFFF';
        }
    );

    el.style.color = '#F69020';
    if(document.querySelector(".wrapper").offsetWidth <= 700) {
        el.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
    }
}

function editColorCityByName(name) {
    $('.header-city-list__item').each(
        function (index, element) {
            if(element.textContent == name){
                element.style.color = '#F69020';
                if(document.querySelector(".wrapper").offsetWidth <= 700) {
                    element.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                }
            } else {
                element.style.color = '#FFFFFF';
            }
        }
    );

    //el.style.color = '#F69020';
}

$(document).ready(
    function() {
        $('.header__burger, .close-header-phone').click(
            function (event) {
                $('div.header__burger').toggleClass('header__burger_close');
                $('header.header').toggleClass('header_phone');
                $('div.header__city_phone').toggleClass('header__city_phoneDisable');
                $('div.header__block, .header__logo').toggleClass('active');
                $('body').toggleClass('lock');
                $('.close-header-phone').toggleClass('active'); // Фон и закрытие заднего мобильной шапки
            }
        );

        $('.menu__button_1').click(
            function (event) {
                if(document.querySelector(".wrapper").offsetWidth <= 700) {
                    $('div.header__burger').toggleClass('header__burger_close');
                    $('header.header').toggleClass('header_phone');
                    $('div.header__city_phone').toggleClass('header__city_phoneDisable');
                    $('div.header__block, .header__logo').toggleClass('active');
                    $('body').toggleClass('lock');
                    $('.close-header-phone').toggleClass('active'); // Фон и закрытие заднего мобильной шапки
                }
            }
        );

/*
        $('.header__cityName, .header__circle, .header-city-list__item').click(
            function (event) {
                $('.header-city-list').toggleClass('active');
                $('.close-city-list').toggleClass('active');
            }
        );
*/
        $('.header__city').hover(
            function (event) {
                if(document.querySelector(".wrapper").offsetWidth > 700)
                    $('.header-city-list').toggleClass('active');

                //$('.close-city-list').toggleClass('active');
            }
        );

        $('.header__city_phone').click(
            function (event) {
                if(document.querySelector(".wrapper").offsetWidth <= 700) {
                    document.querySelector('.header-city-list').removeAttribute('style');
                    $('.header-city-list').toggleClass('active_phone');
                    $('body').toggleClass('lock');
                    $('.close-city-list').toggleClass('active');
                }
            }
        );

        $('.close-city-list').click(
            function (event) {
                document.querySelector('.header-city-list').style.height = 0;
                $('.close-city-list').toggleClass('active');
                setTimeout(function (){
                    $('.header-city-list').toggleClass('active_phone');
                    $('body').toggleClass('lock');
                }, 500);

            }
        );

        // Если куки не записаны
        if($.cookie('city') == null) {
            $.cookie('city', 'м.Лубянка');
        }

        editNameCity($.cookie('city'));
        editColorCityByName($.cookie('city'));

        $('.header-city-list__item').click(
            function (event) {
                var el = event.target;
                var city = el.textContent;

                $.cookie('city', city);

                editNameCity(city);
                editColorCities(el);
            }
        );


        // Смена номера слайда
        hallsSlider.on('slideChange', function () {
            let tagB = document.querySelector(".halls-move__number").getElementsByTagName("b")[0];
            tagB.textContent = hallsSlider.activeIndex+1;
        });
        telegramSlider.on('slideChange', function () {
            let tagB = document.querySelector(".telegram-pagination__text").getElementsByTagName("b")[0];
            tagB.textContent = telegramSlider.activeIndex+1;
        });

        // Вывод общего кол-во слайдов на странице
        let numOfSlides = document.querySelectorAll(".main-slider__slide").length;
        document.querySelector('.halls-move__maxSlide').textContent = numOfSlides;
        numOfSlides = document.querySelectorAll(".telegram-slider__slide").length;
        document.querySelector('.telegram-pagination__maxSlide').textContent = numOfSlides;


        // Маска для номера телефона
        $('.popup-reserve__phone').mask("+7 (999) 99-99-999");
    }
);

// Слайдер
let hallsSlider = new Swiper('.main-slider__container',{
    observer: true,

    navigation: {
      nextEl: ".halls-move__next",
      prevEl: ".halls-move__last",
    },

    // Миниатюры
    thumbs: {
        swiper: {
            observer: true,
            el: '.min-slider__container',
            slidesPerView: 5,
        }

    }
});

let telegramSlider = new Swiper('.telegram-slider__container',{
    spaceBetween: 100,
    initialSlide: 2,
    allowTouchMove: false,
    speed: 100,

    navigation: {
        nextEl: ".telegram-pagination__next",
        prevEl: ".telegram-pagination__prev"
    },

});