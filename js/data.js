const getData = () => ({
    SIMILAR_ADVERTISEMENTS: 10,
    LOW_LAT: 35.65000,
    HI_LAT: 35.70000,
    LOW_LNG: 139.70000,
    HI_LNG: 139.80000,
    LOW_PRICE: 10,
    HI_PRICE: 1000,
    TYPES: {
        'palace': 'Дворец',
        'flat': 'Квартира',
        'house': 'Дом',
        'bungalow': 'Бунгало',
        'hotel': 'Отель',
    },
    MIN_PRICE: {
        'bungalow': 0,
        'flat': 1000,
        'hotel': 3000,
        'house': 5000,
        'palace': 10000,
    },
    LOW_ROOMS: 5,
    HI_ROOMS: 20,
    LOW_GUESTS: 1,
    HI_GUESTS: 7,
    DIGITS: 5,
    CHECKIN: ['12:00', '13:00', '14:00'],
    CHECKOUT: ['12:00', '13:00', '14:00'],
    FEATURES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    PHOTOS: [
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
        'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
    ],
    TOKYO_CENTER: {
        lat: 35.6895,
        lng: 139.692,
    },
    DEFAULT_ZOOM: 11
});

export { getData };
