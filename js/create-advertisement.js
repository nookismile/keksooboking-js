import { getData } from './data.js'
import { getRandomNumber, getRandomList, getAvatarImage } from './util.js';

const {
    LOW_LAT,
    HI_LAT,
    LOW_LNG,
    HI_LNG,
    LOW_PRICE,
    HI_PRICE,
    TYPES,
    LOW_ROOMS,
    HI_ROOMS,
    LOW_GUESTS,
    HI_GUESTS,
    CHECKIN,
    CHECKOUT,
    FEATURES,
    PHOTOS,
    DIGITS
} = getData();

const createAdvertisement = () => {
    const types = Object.keys(TYPES);

    const location = {
        lat: getRandomNumber(LOW_LAT, HI_LAT, DIGITS),
        lng: getRandomNumber(LOW_LNG, HI_LNG, DIGITS)
    }

    return {
        author: {
            avatar: getAvatarImage(),
        },
        offer: {
            title: 'Объявление о сдаче в аренду',
            address: `${location.lat}, ${location.lng}`,
            price: getRandomNumber(LOW_PRICE, HI_PRICE),
            type: types[getRandomNumber(0, TYPES.length - 1)],
            rooms: getRandomNumber(LOW_ROOMS, HI_ROOMS),
            guests: getRandomNumber(LOW_GUESTS, HI_GUESTS),
            checkin: CHECKIN[getRandomNumber(0, CHECKIN.length - 1)],
            checkout: CHECKOUT[getRandomNumber(0, CHECKOUT.length - 1)],
            features: getRandomList(FEATURES),
            description: 'Просторное помещение неподалёку',
            photos: getRandomList(PHOTOS),
        },
        location
    };
};

export { createAdvertisement };
