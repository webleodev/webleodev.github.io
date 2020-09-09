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
    addToCartButton = document.getElementById('add-to-cart'),
    // Add to cart button
    mainFooterWrapper = document.getElementById('main-footer-wrapper'),
    footwearPhotos = document.querySelectorAll('.footwear-photo');
    // Main footer wrapper with switching items (footwear photos)

const ukArray = [2, 3, 4, 5, 6, 7, 8, 9],
    euArray = [35, 36, 37, 38, 39, 40, 41, 42];

const fillBlock = (array, fillBlock) => {
    const items = array.map(value => `<div class="size-item">${value}</div>`);

    fillBlock.innerHTML = items.join('');
};

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

        setTimeout(() => {
            innerTab.innerHTML = '';
        }, 200);
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

    choiceSizeBlock.classList.remove('open');

    setTimeout(() => {
        innerTab.innerHTML = '';
    }, 200);
});

addToCartButton.addEventListener('click', () => {
    let headerCart = document.getElementById('cart-counter');

    headerCart.textContent++

    addToCartButton.textContent = 'added to cart!';

    setTimeout(() => {
        addToCartButton.textContent = 'add to cart';
    }, 2500);
});

mainFooterWrapper.addEventListener('click', (event) => {
    const target = event.target,
        itemSwitch = document.querySelectorAll('.img-item__select');

    if (target === mainFooterWrapper) {
        event.preventDefault();
    } else {
        for (let i = 0; i < footwearPhotos.length; i++) {
            if (itemSwitch[i].classList.contains('selected') && itemSwitch[i].textContent !== '') {
                itemSwitch[i].classList.remove('selected');
                itemSwitch[i].textContent = '';
            };
    
            if (target === itemSwitch[i]) {
                itemSwitch[i].classList.add('selected');
                itemSwitch[i].textContent = i+1;
            } else {
                event.preventDefault();
            };
        };
    };    
});

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < footwearPhotos.length; i++) {
        const item = document.createElement('div');

        item.classList.add('img-item__select');
        
        if (i === 0) {
            item.classList.add('selected');
            item.textContent = i+1;
        };

        mainFooterWrapper.append(item);
    };
});