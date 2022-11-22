import { getData } from './data.js'

const { TOKYO_CENTER } = getData();

const map = L.map('map-canvas')
    .setView(TOKYO_CENTER, 11);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
).addTo(map);
