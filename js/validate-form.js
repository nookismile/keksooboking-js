import { getData } from './data.js'

const { MIN_PRICE } = getData();

const checkCapacity = (capacity, rooms) => {
    if (rooms === 100) {
        return capacity === 0;
    } else {
        return (capacity <= rooms && capacity > 0);
    }
};

const getCapacityErrorMessage = (capacity, rooms) => {
    if (rooms === 100 && capacity !== 0) {
        return 'Слишком много комнат для гостей';
    } else {
        return 'Количество гостей больше количества комнат';
    }
};

const checkPrice = (price, type) => price >= MIN_PRICE[type];

const getPriceErrorMessage = (price, type) => {
    if(price <= MIN_PRICE[type]) {
        return 'Меньше минимального значения';
    }
};

const formValidate = (form) => {
    const pristine = new Pristine(form, {
        classTo: 'ad-form__element',
        errorTextClass: 'ad-form__error-message',
        errorTextParent: 'ad-form__element',
    });
    
    const capacityField = form.querySelector('[name="capacity"]');
    const roomsField = form.querySelector('[name="rooms"]');
    const typeField = form.querySelector('[name="type"]');
    const priceField = form.querySelector('[name="price"]');
    const timeInField = form.querySelector('[name="timein"]');
    const timeOutField = form.querySelector('[name="timeout"]');
    
    pristine.addValidator(
        capacityField,
        () => checkCapacity(+capacityField.value, +roomsField.value),
        () => getCapacityErrorMessage(+capacityField.value, +roomsField.value)
    );
    
    pristine.addValidator(
        priceField,
        () => checkPrice(+priceField.value, typeField.value),
        () => getPriceErrorMessage(+priceField.value, typeField.value)
    );
    
    roomsField.addEventListener('change', () => {
        pristine.validate(capacityField);
    });
    
    typeField.addEventListener('change', (e) => {
        priceField.placeholder = MIN_PRICE[e.target.value];
        pristine.validate(priceField);
    });
    
    timeInField.addEventListener('change', (e) => {
        timeOutField.value = e.target.value;
    });
    
    timeOutField.addEventListener('change', (e) => {
        timeInField.value = e.target.value;
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const isValid = pristine.validate();
        return isValid ? 'valid form' : 'invalid form';
    });
};

export { formValidate };




