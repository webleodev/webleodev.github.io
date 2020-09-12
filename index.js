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
    footwearPhotos = document.querySelectorAll('.footwear-photo'),
    // Main footer wrapper with switching items (footwear photos)
    outerSelect = document.getElementById('outer-select'),
    outerSelectList = document.getElementById('outer-select__list'),
    leftSideButton = document.getElementById('open-left-side'),
    rightSideButton = document.getElementById('open-right-side');

const ukArray = [2, 3, 4, 5, 6, 7, 8, 9],
    euArray = [35, 36, 37, 38, 39, 40, 41, 42],
    countriesArray = ["RUS", "USA", "CAN", "CHN", "ARE", "POL", "DEU", "ARG", "BEL"];

const fillBlock = (array, arrayType, fillBlock) => {
    if (arrayType === 'sizeArray') {
        const items = array.map(value => `<div class="size-item">${value}</div>`);

        fillBlock.innerHTML = items.join('');
    } else if (arrayType === 'countriesArray') {
        const items = array.map(value => `<li>${value}</li>`);

        fillBlock.innerHTML = items.join('');
    };
};

menuItem.addEventListener('click', () => {
    const headerMenu = document.getElementById('header-menu'),
        headerIcon = document.getElementById('header-icon');

    headerMenu.classList.toggle('open');
    headerIcon.classList.toggle('open');
});

choiceCountries.addEventListener('click', () => {
    const choiceCountriesIcon = document.getElementById('select-icon'),
        arrayType = 'countriesArray';

    fillBlock(countriesArray, arrayType, outerSelectList);

    outerSelect.classList.toggle('open');
    choiceCountriesIcon.classList.toggle('open');
});

outerSelectList.addEventListener('click', (event) => {
    const target = event.target,
        countrySpan = document.getElementById('country-span'),
        choiceCountriesIcon = document.getElementById('select-icon');

    if (target.tagName.toLowerCase() === 'li') {
        countrySpan.textContent = target.textContent;
        outerSelect.classList.remove('open');
        choiceCountriesIcon.classList.remove('open');

        setTimeout(() => {
            outerSelectList.innerHTML = '';
        }, 200);
    };
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
            const selectedId = target.id,
                arrayType = 'sizeArray';

            innerTab.innerHTML = '';

            if (selectedId === 'uk-tab') {
                fillBlock(ukArray, arrayType, innerTab);
            } else if (selectedId === 'eu-tab') {
                fillBlock(euArray, arrayType, innerTab);
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

leftSideButton.addEventListener('click', () => {
    const leftSide = document.getElementById('left-side'),
        rightSide = document.getElementById('right-side');

    leftSideButton.classList.toggle('close');
    leftSide.classList.toggle('open');
    rightSide.classList.toggle('hidden');
});

rightSideButton.addEventListener('click', () => {
    const rightSide = document.getElementById('right-side'),
        leftSide = document.getElementById('left-side');

    rightSideButton.classList.toggle('close');
    rightSide.classList.toggle('open');
    leftSide.classList.toggle('hidden');
});