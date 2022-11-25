document.addEventListener('DOMContentLoaded', function () {

    $('.burger-button').on('click', function () {
        $('.header__menu').toggleClass('menu__burger');
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const video_block = Array(
        `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/JkCt9FZQ0fA"
        title="Як доїхати до СТЦ Restart (Рестарт) на Підкови, Рівне" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        </iframe>`,
        `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/tDY2eTxnCcY"
        title="Як доїхати до СТЦ Restart (Рестарт) на Соборній, 446в, Рівне" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        </iframe>`,
        `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jilaKdy7kF8"
        title="Як доїхати до СТЦ Restart (Рестарт) - Рівне, Київська, 98г" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        </iframe>`,
        `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/yZWDbd24juU"
        title="Як доїхати до СТЦ Restart (Рестарт) - Луцьк, Гонгадзе, 5" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        </iframe>`,
        `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/IUOfk6NaL-s"
        title="Як доїхати до СТЦ Restart (Рестарт) - Луцьк, Об'їзна, Рованці, Технічна, 1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        </iframe>`
    );
    const video_id = Array('#video1', '#video2', '#video3', '#video4', '#video5');

    for (let i = 0; i < video_id.length; i++) {
        $(video_id[i] + '>button').on('click', function () {
            $(video_id[i]).html("");
            $(video_id[i]).html(video_block[i]);
        });
    }


    const about_video = `<div class="video-container"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/ND6Kc_0Ir8o" title="Робочий день на майстерні Restart в динаміці" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    $('.ab-video__button').on('click', function () {
        $('.ab-video__box').html("");
        $('.ab-video__box').html(about_video);
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const form = document.getElementById('form1');
    const pop_up = document.getElementById('pop-up');

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        pop_up.setAttribute('class', 'pop-up__enable')

        form.reset();
    }

    $('.pop-up__close_button').on('click', function () {
        $('#pop-up').toggleClass('pop-up__enable');
    });

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