import { getData } from "./data.js";

const { GET_DATA_SERVER, SIMILAR_ADVERTISEMENTS } = getData();

const renderAdvertisements = (map, onSuccess, onError) => {
    fetch(GET_DATA_SERVER)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                onError('Ошибка в получении данных. Попробуйте ещё раз.');
            }
        })
        .then((data) => onSuccess(map, data.slice(0, SIMILAR_ADVERTISEMENTS )))
        .catch((err) => onError('Ошибка в получении данных. Попробуйте ещё раз.'));
};

export { renderAdvertisements };

