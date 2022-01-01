"use strict";

const area = (r) => {
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${(Math.PI * Math.pow(r, 2)).toFixed(2)}`);
};
const circumference = (r) => {
    console.log(`Yarı çapı ${r} olan dairenin çevresi: ${(Math.PI * 2 * r).toFixed(2)}`);
};

module.exports = {
    area,
    circumference
};
