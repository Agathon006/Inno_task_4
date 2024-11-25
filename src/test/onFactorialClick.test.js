import onFactorialClick from '../scripts/calc/operations/onFactorialClick'

describe("factorial function", () => {
    it("should handle negative input", () => {
        const state = { value: -5 };
        onFactorialClick(state)
        expect(state.value).toBe("Error");
    });

    it("should handle zero input", () => {
        const state = { value: 0 };
        onFactorialClick(state)
        expect(state.value).toBe(1);
    });

    it("should calculate factorial for positive input", () => {
        const state = { value: 5 };
        onFactorialClick(state)
        expect(state.value).toBe(120);
    });

    it("should calculate factorial for 1", () => {
        const state = { value: 1 };
        onFactorialClick(state)
        expect(state.value).toBe(1);
    });

    it("should calculate factorial for large input", () => {
        const state = { value: 10 };
        onFactorialClick(state)
        expect(state.value).toBe(3628800);
    });


    it("should not modify the original object if value is already 'Error'", () => {
        const state = { value: 'Error' };
        const originalState = { ...state };
        onFactorialClick(state)
        expect(state).toEqual(originalState);
    });

    it("should not modify the original object if value is already a number", () => {
        const state = { value: 123 };
        const originalState = { ...state };
        onFactorialClick(state)
        expect(state).not.toEqual(originalState);  
    });

    it('should handle large inputs that might cause overflow', () => {
        const state = { value: 20 }; 
        onFactorialClick(state)
        expect(state.value).toBe(2432902008176640000);
    });

});