
import mobileNav from './modules/mobile-nav.js';
import sliders from './modules/sliders.js';
import productCounter from './modules/productCounter.js';


document.addEventListener('DOMContentLoaded', () => {

	// Мобильная навигация
	mobileNav();

	// Слайдеры
	sliders();

	// Счетчик товара							
	productCounter();
});
