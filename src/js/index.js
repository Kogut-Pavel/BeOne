
import mobileNav from './modules/mobile-nav.js';
import sliders from './modules/sliders.js';
import productCounter from './modules/productCounter.js';
import accordeon from './modules/accordeon.js';
import productSizes from './modules/productSizes.js';
import miniCatalog from './modules/miniCatalog.js';


document.addEventListener('DOMContentLoaded', () => {

	// Мобильная навигация
	mobileNav();

	// Слайдеры
	sliders();

	// Счетчик товара							
	productCounter();

	// Аккордеон на странице товара
	accordeon();

	// Переключение размера у продукта
	productSizes();

	// Каталог на главной странице
	miniCatalog();
	
});
