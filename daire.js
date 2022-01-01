"use strict";
const arguments1 = process.argv.slice(2);
const r = arguments1[0] * 1;
const alanHesapla = () => {
    return Math.PI * Math.pow(r, 2);
};
console.log(`Yarıçapı ${r} olan dairenin alanı: ${alanHesapla(r)}`);