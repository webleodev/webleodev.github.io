import './styles/styles.scss';

const menuItem = document.getElementById('header-menu-item'),
    // Header's menu block
    choiceCountries = document.querySelector('.choice-countries'),
    // Header's countries choice
    colorSelectItem = document.getElementById('color-select-item'),
    colorSelectBox = document.getElementById('color-select__box'),
    // Left side colors blocks
    sizeBlock = document.getElementById('size__box'),
    choiceSizeBlock = document.getElementById('choice-size__box'),
    innerTab = document.getElementById('inner__tab'),
    // Right side size's block
    addToCartButton = document.getElementById('add-to-cart');

const ukArray = [2, 3, 4, 5, 6, 7, 8, 9],
    euArray = [35, 36, 37, 38, 39, 40, 41, 42];

const fillBlock = (array, fillBlock) => {
    const items = array.map(value => `<div class="size-item">${value}</div>`);

    fillBlock.innerHTML = items.join('');
}

menuItem.addEventListener('click', () => {
    const headerMenu = document.getElementById('header-menu'),
        headerIcon = document.getElementById('header-icon');

    headerMenu.classList.toggle('open');
    headerIcon.classList.toggle('open');
});

choiceCountries.addEventListener('click', () => {
    const outerSelect = document.getElementById('outer-select'),
        choiceCountriesIcon = document.getElementById('select-icon');

    outerSelect.classList.toggle('open');
    choiceCountriesIcon.classList.toggle('open');
});

colorSelectItem.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName.toLowerCase() === 'img') {
        colorSelectBox.classList.toggle('open');
    }
});

colorSelectBox.addEventListener('click', (event) => {
    const target = event.target,
        closeSpan = document.getElementById('close-select__span');

    if (target === closeSpan) {
        colorSelectBox.classList.remove('open');
    }
});

sizeBlock.addEventListener('click', () => {
    choiceSizeBlock.classList.toggle('open');
});

choiceSizeBlock.addEventListener('click', (event) => {
    const target = event.target,
        tab = document.querySelectorAll('.tab'),
        innerTab = document.getElementById('inner__tab'),
        closeSpan = document.getElementById('close-size__span');

    if (target === closeSpan) {
        choiceSizeBlock.classList.remove('open');
        innerTab.innerHTML = '';
    };

    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('selected');

        if (target === tab[i]) {
            tab[i].classList.add('selected');
        };

        if (target.classList.contains('selected')) {
            const selectedId = target.id;

            innerTab.innerHTML = '';

            if (selectedId === 'uk-tab') {
                fillBlock(ukArray, innerTab);
            } else if (selectedId === 'eu-tab') {
                fillBlock(euArray, innerTab);
            };
        };
    };
});

innerTab.addEventListener('click', (event) => {
    const target = event.target,
        footwearSize = document.getElementById('footwear-size'),
        items = document.querySelectorAll('.size-item');

    for (let i = 0; i < items.length; i++) {
        if (target === items[i]) {
            footwearSize.textContent = `size: ${items[i].textContent}`;
        };
    };

    innerTab.innerHTML = '';
    choiceSizeBlock.classList.remove('open');
});

addToCartButton.addEventListener('click', () => {
    let headerCart = document.getElementById('cart-counter');

    headerCart.textContent++

    addToCartButton.textContent = 'added to cart!';

    setTimeout(() => {
        addToCartButton.textContent = 'add to cart';
    }, 2500);
});