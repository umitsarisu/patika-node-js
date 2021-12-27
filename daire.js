const arguments = process.argv.slice(2);
const r = arguments[0] * 1;
const alanHesapla = (r) => {
    return Math.PI * Math.pow(r, 2)
}
console.log(`Yarıçapı ${r} olan dairenin alanı: ${alanHesapla(r)}`);