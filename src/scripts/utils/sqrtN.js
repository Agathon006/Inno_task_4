export default (x, n) => {
    if (n <= 0) {
        throw new Error("Invalud number");
    }
    if (x < 0 && n % 2 === 0) {
        throw new Error("Can't get even root of negative number!");
    }
    const magnitude = Math.abs(x) ** (1 / n);
    return Math.sign(x) * magnitude;
};