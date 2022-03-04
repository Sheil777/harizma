function editNameCity(name) {
    $('span.main__textCity')[0].textContent = name;
    $('div.header__cityName')[0].textContent = name;
}

function editColorCities(el) {
    //el.parentElement;

    $('.header-city-list__item').each(
        function (index, element) {
            element.style.color = '#FFFFFF';
        }
    );

    el.style.color = '#F69020';
}

function editColorCityByName(name) {
    $('.header-city-list__item').each(
        function (index, element) {
            if(element.textContent == name)
                element.style.color = '#F69020';
            else
                element.style.color = '#FFFFFF';
        }
    );

    //el.style.color = '#F69020';
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
                $('.close-city-list').toggleClass('active');
            }
        );

        $('.close-city-list').click(
            function (event) {
                $('.header-city-list').toggleClass('active');
                $('.close-city-list').toggleClass('active');
            }
        );

        // Если куки не записаны
        if($.cookie('city') == null) {
            $.cookie('city', 'м.Лубянка');
        }

        editNameCity($.cookie('city'));
        editColorCityByName($.cookie('city'));

        $('.header-city-list').click(
            function (event) {
                var el = event.target;
                var city = el.textContent;

                $.cookie('city', city);

                editNameCity(city);
                editColorCities(el);
            }
        );
    }
);