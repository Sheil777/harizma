class ChangeSlides {
    // Слайдер, куда вставляем
    slider = document.querySelector('.main-slider__wrapper');
    sliderMin = document.querySelector('.min-slider__wrapper');

    //pathSlides = "template/img/halls/hall-2/";
    slides = {
        "baum": {
            "hall-1": {
                pathSlides: "template/img/halls/hall-1/",
                slide: Array(
                    "harizmahall1-1.jpg",
                    "harizmahall1-2.jpg",
                    "harizmahall1-3.jpg",
                    "harizmahall1-4.jpg",
                    "harizmahall1-5.jpg",
                    "harizmahall1-6.jpg",
                    "harizmahall1-7.jpg",
                    "harizmahall1-8.jpg",
                    "harizmahall1-9.jpg",
                    "harizmahall1-10.jpg",
                    "friendshall1-11.jpg",
                    "friendshall1-12.jpg",
                    "friendshall1-13.jpg",
                )
            },
            "hall-2": {
                pathSlides: "template/img/halls/hall-2/",
                slide: Array(
                    "harizmahall2-1.jpg",
                    "harizmahall2-2.jpg",
                    "harizmahall2-3.jpg",
                    "harizmahall2-4.jpg",
                    "harizmahall2-5.jpg",
                    "harizmahall2-6.jpg",
                    "harizmahall2-7.jpg",
                    "harizmahall2-8.jpg",
                    "harizmahall2-9.jpg",
                    "harizmahall2-10.jpg",
                    "harizmahall2-11.jpg",
                    "harizmahall2-12.jpg"
                )
            }
        }
    }

    /*
    slides = Array(
        "harizmahall2-1.jpg",
        "harizmahall2-2.jpg",
        "harizmahall2-3.jpg",
        "harizmahall2-4.jpg",
        "harizmahall2-5.jpg",
        "harizmahall2-6.jpg",
        "harizmahall2-7.jpg",
        "harizmahall2-8.jpg",
        "harizmahall2-9.jpg",
        "harizmahall2-10.jpg",
        "harizmahall2-11.jpg",
        "harizmahall2-12.jpg"
    );
*/

    createSlide(name, size = 'main') {
        let slideDiv = document.createElement('div');
        if (size == 'main')
            slideDiv.setAttribute('class', 'main-slider__slide swiper-slide');
        else
            slideDiv.setAttribute('class', 'min-slider__slide swiper-slide');

        let intermediateDiv = document.createElement('div');
        if (size == 'main')
            intermediateDiv.setAttribute('class', 'main-slider__image');
        else
            intermediateDiv.setAttribute('class', 'min-slider__image');

        let img = document.createElement('img');
        img.setAttribute('src', name);

        intermediateDiv.appendChild(img);
        slideDiv.appendChild(intermediateDiv);

        return slideDiv;
    }

    clearSlider() {
        // Удаление старых слайдов
        let slidesForDel = document.querySelectorAll(".main-slider__slide");
        let slidesMinForDel = document.querySelectorAll(".min-slider__slide");
        for (let i = 0; i < slidesForDel.length; i++) {
            slidesForDel[i].remove();
            slidesMinForDel[i].remove();
        }
    }

    updateCountSlidesOnPage() {
        // Вывод общего кол-во слайдов на странице
        let numOfSlides = document.querySelectorAll(".main-slider__slide").length;
        document.querySelector('.halls-move__maxSlide').textContent = numOfSlides;
    }

    change(hall = "hall-1") {
        let path = this.slides.baum[hall].pathSlides;
        let slides = this.slides.baum[hall].slide;

        // Удаление старых слайдов
        this.clearSlider();

        // Вставляем новые слайды
        for (let i = 0; i < slides.length; i++) {
            //let name = this.pathSlides + this.slides[i];
            let name = path + slides[i];
            let slideDiv = this.createSlide(name, 'main');
            let slideDivMin = this.createSlide(name, 'min');

            this.slider.appendChild(slideDiv);
            this.sliderMin.appendChild(slideDivMin);

            this.updateCountSlidesOnPage();
        }
    }
}

let a = new ChangeSlides();
//a.change("hall-2");

function changeActiveOnHalls(el){
    let list = document.querySelectorAll(".halls-list__text");
    for (let i = 0; i < list.length; i++){
        list[i].classList.remove("active");
    }
    el.classList.add('active');
}

$('#halls-list__hall-1').click(
    function (event) {
        a.change("hall-1");
        changeActiveOnHalls(document.querySelector('#halls-list__hall-1'));
    }
);
$('#halls-list__hall-2').click(
    function (event) {
        a.change("hall-2");
        changeActiveOnHalls(document.querySelector('#halls-list__hall-2'));
    }
);