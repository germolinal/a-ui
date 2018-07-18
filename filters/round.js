module.exports = function (value, nDecimals) {
    if (!value) return 0
    const n = Math.pow(10,nDecimals);    
    return Math.round(value * n) / n;
}