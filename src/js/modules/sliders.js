function sliders() {

    let heroSlider = new Swiper('.hero__slider-wrapper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return (
                    '<span class="' + className + '">' + (index + 1) + '</span>'
                );
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

export default sliders;
