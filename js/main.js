import { formValidate } from './validate-form.js';
import { createMarkers } from './map.js';
import { addFormInactiveState } from './form-state.js';
import { priceSliderInit } from './price-slider.js';
import { getDataForm } from './server-requests.js';
import { onErrorRequest } from './messages.js';

priceSliderInit();
addFormInactiveState();
getDataForm(createMarkers, onErrorRequest);
formValidate();
