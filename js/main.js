import { getData } from './data.js';
import { createAdvertisement } from './create-advertisement.js';
import { formValidate } from './validate-form.js';
import { mapInit, createMarkers } from './map.js';
import { addFormInactiveState } from './form-state.js';
import { priceSliderInit } from './price-slider.js';

const { SIMILAR_ADVERTISEMENTS } = getData();

const advertisements = Array.from({ length: SIMILAR_ADVERTISEMENTS }, createAdvertisement);

priceSliderInit();
addFormInactiveState();
const map = mapInit();
createMarkers(map, advertisements);
formValidate();
