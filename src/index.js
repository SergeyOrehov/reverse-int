module.exports = function reverse(n) {
    const num = String(n);
    return num.split("").reverse().join("");
};
