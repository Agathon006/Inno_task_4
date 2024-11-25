import onDigitClick from '../scripts/calc/operations/onDigitClick'

describe("onDigitClick", () => {

    const digitsMap = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
    };

    it("52 and click 8 = 528", () => {
        const state = {
            value: 52,
            lastValue: null,
            operation: null,
            memoryValue: null,
        };

        const valueText = {
            textContent: '52',
        };

        onDigitClick(state, valueText, digitsMap['eight']);
        expect(state.value).toBe(528);
    });

    it("52 with some operation and click 2 must be 2", () => {
        const state = {
            value: 52,
            lastValue: null,
            operation: 'root',
            memoryValue: null,
        };

        const valueText = {
            textContent: '52',
        };
        onDigitClick(state, valueText, digitsMap['two']);
        expect(state.value).toBe(2);
    });

    it("0 and click 0 must be 0", () => {
        const state = {
            value: 0,
            lastValue: null,
            operation: null,
            memoryValue: null,
        };

        const valueText = {
            textContent: '0',
        };
        onDigitClick(state, valueText, digitsMap['zero']);
        expect(state.value).toBe(0);
    });

    it("0 and click 0 must be 0 (with 0,000 textConent)", () => {
        const state = {
            value: 0,
            lastValue: null,
            operation: null,
            memoryValue: null,
        };

        const valueText = {
            textContent: '0,000',
        };
        onDigitClick(state, valueText, digitsMap['zero']);
        expect(state.value).toBe(0);
    });

    it("0 and click 1 must be 0,0001 (with 0,000 textConent)", () => {
        const state = {
            value: 0,
            lastValue: null,
            operation: null,
            memoryValue: null,
        };

        const valueText = {
            textContent: '0,000',
        };
        onDigitClick(state, valueText, digitsMap['one']);
        expect(state.value).toBe(0.0001);
    });

});