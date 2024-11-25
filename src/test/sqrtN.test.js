import nthRoot from "../scripts/utils/sqrtN.js";

describe("nthRoot", () => {
    it("must correctly calculate the n-th root of positive numbers", () => {
        expect(nthRoot(8, 3)).toBeCloseTo(2);
        expect(nthRoot(16, 2)).toBe(4);
        expect(nthRoot(1, 5)).toBe(1);
        expect(nthRoot(64, 6)).toBeCloseTo(2);
    });

    it("must correctly calculate the n-th root of negative numbers", () => {
        expect(nthRoot(-8, 3)).toBeCloseTo(-2);
        expect(nthRoot(-1, 3)).toBeCloseTo(-1);
    });

    it("should handle null correctly", () => {
        expect(nthRoot(0, 2)).toBe(0);
        expect(nthRoot(0, 5)).toBe(0);
    });


    it("should handle fractional values ​​of n correctly", () => {
        expect(nthRoot(16, 2.0)).toBeCloseTo(4);
        expect(nthRoot(8, 1.5)).toBeCloseTo(4);
        expect(nthRoot(16, 0.5)).toBeCloseTo(256);
    });


    it("should throw an error for invalid input data", () => {
        expect(() => nthRoot(8, 0)).toThrow();
        expect(() => nthRoot(8, -1)).toThrow();
        expect(() => nthRoot(-8, 2)).toThrow();
    });

});