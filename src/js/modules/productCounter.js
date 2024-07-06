const productCounter = function() {
    let buttonCountMinus = document.querySelector('.product__counter-minus');
    let buttonCountPlus = document.querySelector('.product__counter-plus');

    let count = document.querySelector('.product__counter-number');
    let number = 1;

    if (buttonCountPlus && buttonCountMinus) {
        buttonCountPlus.addEventListener('click', function() {
            number++;
            count.textContent = number;
        });

        buttonCountMinus.addEventListener('click', function() {
            if (number !== 1) {
                number--;
                count.textContent = number;
            }
        });
    }
};

export default productCounter;
