// MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random + доработки

const SIMILAR_ADVERTISEMENTS = 10;
const LOW_LAT = 35.65000;
const HI_LAT = 35.70000;
const LOW_LNG = 139.70000;
const HI_LNG = 139.80000;
const LOW_PRICE = 10;
const HI_PRICE = 1000;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const LOW_ROOMS = 5;
const HI_ROOMS = 20;
const LOW_GUESTS = 1;
const HI_GUESTS = 7;
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
]


function getRandomNumber(a, b) {
    min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getRandomNumberFixed(a, b) {
    min = Math.min(Math.abs(a), Math.abs(b));
    max = Math.max(Math.abs(a), Math.abs(b));
    result = Math.random() * (max - min + 1) + min;
    return result.toFixed(5);
}

function getAvatarImage() {
    const imageNumber = getRandomNumber(1, SIMILAR_ADVERTISEMENTS);
    return `img/avatars/user${imageNumber < 10 ? '0' + imageNumber : imageNumber}.png`;
}

function getRandomList(array) {
    const length = getRandomNumber(1, array.length - 1);
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(array[getRandomNumber(0, array.length - 1)]);
    }
    return [...new Set(result)];
}

function getAdv() {
    // - создать массив
    // - 10 раз создать объект с данными объявления и положить его в массив
    // - вернуть массив

    const arr = [];
    for (let i = 0; i < 10; i++) {
        const adv = createAdv();
        arr.push(adv);
    }

    return arr;
}

function createAdv() {
    const location = {
        lat: getRandomNumberFixed(LOW_LAT, HI_LAT),
        lng: getRandomNumberFixed(LOW_LNG, HI_LNG)
    }

    return {
        author: {
            avatar: getAvatarImage(),
        },
        offer: {
            title: 'Объявление о сдаче в аренду',
            address: `${location.lat}, ${location.lng}`,
            price: getRandomNumber(LOW_PRICE, HI_PRICE),
            type: TYPES[getRandomNumber(0, TYPES.length - 1)],
            rooms: getRandomNumber(LOW_ROOMS, HI_ROOMS),
            guests: getRandomNumber(LOW_GUESTS, HI_GUESTS),
            checkin: CHECKIN[getRandomNumber(0, CHECKIN.length - 1)],
            checkout: CHECKOUT[getRandomNumber(0, CHECKOUT.length - 1)],
            feauters: getRandomList(FEATURES),
            description: 'Просторное помещение неподалёку',
            photos: getRandomList(PHOTOS),
            location: ''
        },
        location
    }
}

