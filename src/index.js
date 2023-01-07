module.exports = function reverse(n) {
    if (n > 0) return (n + "").split("").reverse().join("");
    return "-" + (n + "").slice(1).split("").reverse().join("");
};
