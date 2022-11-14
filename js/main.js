import { generateCardElements } from './generate-card-elements.js';
import { getData } from './data.js';
import { createAdvertisement } from './create-advertisement.js';
import { addActiveStay } from './form.js';

const {SIMILAR_ADVERTISEMENTS} = getData();

addActiveStay();

const advertisements = Array.from({length: SIMILAR_ADVERTISEMENTS}, createAdvertisement);

generateCardElements(advertisements);

