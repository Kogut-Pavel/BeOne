import { tns } from 'tiny-slider';

function sliders() {
    let heroSlider = tns({
        container: '.hero__slider',
        controlsContainer: '.hero__slider-controls',
        items: 1,
        slideBy: 1,
        autoplay: false,
        autoplayButton: false,
        autoplayButtonOutput: false,
        loop: true,
        speed: 600,
        controls: true,
        nav: true,
        fixedWidth: 680,
    });

    let heroDotsList = document.querySelectorAll('.hero .tns-nav button');

    if (heroDotsList) {
        for (let i = 0; i < heroDotsList.length; i++) {
            heroDotsList[i].textContent = i + 1;
        } 
    }
   
}

export default sliders;
