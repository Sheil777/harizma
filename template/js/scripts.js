$(document).ready(
    function(){
        $('.header__burger').click(
            function (event) {
                $('div.header__burger').toggleClass('header__burger_close');
                $('header.header').toggleClass('header_phone');
                $('div.header__city_phone').toggleClass('header__city_phoneDisable');
                $('body').toggleClass('lock');
            }
        );
    }
);