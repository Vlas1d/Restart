$('.burger-button').on('click', function () {
    $('.header__menu').toggleClass('menu__burger');
});

const container = document.querySelector('.main-bg__container');
document.querySelector('.main-bg__slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
});

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});