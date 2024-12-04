export default (x, n) => {
    if (n <= 0) {
        throw new Error("Invalud number");
    }
    if (x < 0 && n % 2 === 0) {
        throw new Error("Can't get even root of negative number!");
    }
    return +((x < 0 ? '-' : '') + (x < 0 ? -x : x) ** (1 / n));
};