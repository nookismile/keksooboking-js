import { getData } from "./data.js";
import { onGetRequestError, onPostRequestError, onPostRequestSuccess } from './messages.js';
import { createMarkers } from './markers.js';
import { clearFields } from './form-state.js';

const { GET_DATA_SERVER, SIMILAR_ADVERTISEMENTS, POST_DATA_SERVER } = getData();

const renderAdvertisements = (map) => {
    fetch(GET_DATA_SERVER)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                onGetRequestError('Ошибка в получении данных. Попробуйте ещё раз.');
            }
        })
        .then((data) => createMarkers(map, data.slice(0, SIMILAR_ADVERTISEMENTS )))
        .catch(() => onGetRequestError('Ошибка в получении данных. Попробуйте ещё раз.'));
};


const sendAdvertisement = (formData) => {
    fetch(POST_DATA_SERVER, {method: 'POST', body: formData})
        .then((response) => {
            if (response.ok) {
                onPostRequestSuccess();
                clearFields();
            } else {
                onPostRequestError();
            }
        })
        .catch(() => onPostRequestError());
};

export { renderAdvertisements, sendAdvertisement };
