import { getData } from './data.js';
import { getElements } from './elements.js';
import { generateCardElement } from './generate-card-element.js';
import { createAdvertisement } from './create-advertisement.js';
import { addFormInactiveStay, addFormActiveStay } from './form-state.js';
import { formValidate } from './validate-form.js';

import { isMapLoaded, createMarkers } from './map.js'

const { adForm, mapFilters } = getElements();
const { SIMILAR_ADVERTISEMENTS } = getData();

const advertisements = Array.from({ length: SIMILAR_ADVERTISEMENTS }, createAdvertisement);

if(!isMapLoaded) {
    addFormInactiveStay(adForm, mapFilters);
} else {
    addFormActiveStay(adForm, mapFilters);
    // generateCardElement(advertisements);
    createMarkers(advertisements);
    formValidate(adForm);
}
