// MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(a, b) {
    min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

getRandomIntInclusive(5, 12);

