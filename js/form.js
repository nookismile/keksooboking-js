const form = document.querySelector('.ad-form');
const formInteractive = [...form.children];
const mapFilters = document.querySelector('.map__filters');
const mapFiltersInteractive = [...mapFilters.children];

const MIN_VALUE_TITLE = 30;
const MAX_VALUE_TITLE = 100;
const MAX_VALUE_PRICE = 100000;

const pristine = new Pristine(form, {
    classTo: 'ad-form__element',
    errorClass: 'ad-form__element--invalid',
    successClass: 'ad-form__element--valid',
    errorTextParent: 'ad-form__element',
    errorTextTag: 'span',
    errorTextClass: 'ad-form__error'
}, false);

function validateTitle(value) {
    return value.length >= MIN_VALUE_TITLE && value.length <= MAX_VALUE_TITLE;
}

pristine.addValidator(
    form.querySelector('#title'),
    validateTitle,
    'От 30 до 100 символов'
);

function validatePrice(value) {
    return value <= MAX_VALUE_PRICE;
}

pristine.addValidator(
    form.querySelector('#price'),
    validatePrice,
    'до 100 000'
);




form.addEventListener('submit', (e) => {
    e.preventDefault();
    pristine.validate();
    console.log('ok');
});








const addInactiveStay = () => {
    form.classList.add('ad-form--disabled');
    formInteractive.forEach((element) => {
        element.disabled = true;
    });

    mapFilters.classList.add('ad-form--disabled');
    mapFiltersInteractive.forEach((element) => {
        element.disabled = true;
    });
};

const addActiveStay = () => {
    form.classList.remove('ad-form--disabled');
    formInteractive.forEach((element) => {
        element.disabled = false;
    });

    mapFilters.classList.remove('ad-form--disabled');
    mapFiltersInteractive.forEach((element) => {
        element.disabled = false;
    });
};

export { addInactiveStay, addActiveStay };
