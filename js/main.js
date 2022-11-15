import { getData } from './data.js';
import { getElements } from './elements.js';
import { generateCardElements } from './generate-card-elements.js';
import { createAdvertisement } from './create-advertisement.js';
import { addInactiveStay, addActiveStay } from './form.js';
import { validateForm } from './validate-form.js';

const {adForm, mapFilters} = getElements();
const {SIMILAR_ADVERTISEMENTS} = getData();

const advertisements = Array.from({length: SIMILAR_ADVERTISEMENTS}, createAdvertisement);

addInactiveStay(adForm, mapFilters);
generateCardElements(advertisements);
addActiveStay(adForm, mapFilters);

validateForm(adForm);

