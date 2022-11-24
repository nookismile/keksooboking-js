import { getElements, getFormFields  } from './elements.js';
import { getData } from './data.js';
import { cityMap, mainMarker } from './map.js';

const { adForm, mapFilters, priceSlider } = getElements();
const {
    avatarField,
    titleField,
    typeField,
    addressField,
    timeinField,
    timeoutField,
    roomsField,
    capacityField,
    descriptionField,
    featuresFields,
    photoField,
    priceField,
} = getFormFields();

const { MIN_PRICE, TOKYO_CENTER, DEFAULT_ZOOM } = getData();

const setInactiveState = () => {
    adForm.classList.add('ad-form--disabled');
    [...adForm.children].forEach((element) => {
        element.setAttribute('disabled', true);
    });
    
    priceSlider.setAttribute('disabled', true);
    
    mapFilters.classList.add('map__filters--disabled');
    [...mapFilters.children].forEach((element) => {
        element.setAttribute('disabled', true);
    });
};

const setActiveState = () => {
    adForm.classList.remove('ad-form--disabled');
    [...adForm.children].forEach((element) => {
        element.removeAttribute('disabled');
    });
    
    priceSlider.removeAttribute('disabled');
    
    mapFilters.classList.remove('map__filters--disabled');
    [...mapFilters.children].forEach((element) => {
        element.removeAttribute('disabled');
    });
};

const clearForm = () => {
    avatarField.src = 'img/muffin-grey.svg';
    titleField.value = '';
    typeField.value = 'flat';
    addressField.value = `${ TOKYO_CENTER.lat }, ${ TOKYO_CENTER.lng }`;
    priceField.value = MIN_PRICE['flat'];
    timeinField.value = '12:00';
    timeoutField.value = '12:00';
    roomsField.value = '1';
    capacityField.value = '3';
    descriptionField.value = '';
    photoField.innerHTML = '';
    priceSlider.noUiSlider.set(MIN_PRICE['flat']);
    
    [...featuresFields].forEach((field) => {
        field.checked = false;
    });
    
    cityMap.setView(TOKYO_CENTER, DEFAULT_ZOOM);
    mainMarker.setLatLng(TOKYO_CENTER);
};


export { setInactiveState, setActiveState, clearForm };
