function editNameCity(name) {
    $('span.main__textCity')[0].textContent = name;
    $('div.header__cityName')[0].textContent = name;
}

$(document).ready(
    function() {
        $('.header__burger').click(
            function (event) {
                $('div.header__burger').toggleClass('header__burger_close');
                $('header.header').toggleClass('header_phone');
                $('div.header__city_phone').toggleClass('header__city_phoneDisable');
                $('div.header__block, .header__logo').toggleClass('active');
                $('body').toggleClass('lock');
            }
        );

        $('.header__cityName, .header__circle, .header-city-list__item').click(
            function (event) {
                $('.header-city-list').toggleClass('active');
            }
        );

        // Если куки не записаны
        if($.cookie('city') == null) {
            $.cookie('city', 'м.Лубянка');
        }

        $('.header-city-list').click(
            function (event) {
                var el = event.target;
                var city = el.textContent;
                el.style.color = '#F69020';

                $.cookie('city', city);

                editNameCity(city);
            }
        );
    }
);