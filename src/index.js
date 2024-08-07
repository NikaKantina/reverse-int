module.exports = function reverse (n) {
    const nAbs = Math.abs(n);
    const nArray = String(nAbs).split('');
    const reversedArray =  nArray.reverse();
    return Number(reversedArray.join(''));
}

