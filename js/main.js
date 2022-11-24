import './price-slider.js';
import './map.js';
import { formValidate } from './validate-form.js';
import { cityMap } from './map.js';
import { renderAdvertisements } from './server-requests.js';
import { formReset } from './form-state.js';

renderAdvertisements(cityMap);
formValidate();
formReset();
