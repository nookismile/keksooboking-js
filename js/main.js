import { generateCardElements } from './generate-card-elements.js';
import { getData } from './data.js';
import { createAdvertisement } from './create-advertisement.js';

const {SIMILAR_ADVERTISEMENTS} = getData();

const advertisements = Array.from({length: SIMILAR_ADVERTISEMENTS}, createAdvertisement);

generateCardElements(advertisements);

