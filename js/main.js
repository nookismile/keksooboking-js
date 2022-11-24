import './price-slider.js';
import { formValidate } from './validate-form.js';
import { initMap, createMarkers } from './map.js';
import { renderAdvertisements } from './server-requests.js';
import { onGetRequestError } from './messages.js';

const map = initMap();
renderAdvertisements(map, createMarkers, onGetRequestError);
formValidate();
