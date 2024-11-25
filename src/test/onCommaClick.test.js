import onCommaClick from "../scripts/calc/operations/onCommaClick";

describe("onCommaClick", () => {
    let state = {
        value: 0,
        lastValue: null,
        operation: 'root',
        memoryValue: null,
    };

    let valueText = {
        textContent: '',
    };

    it("0, case", () => {
        onCommaClick(state, valueText);
        expect(valueText.textContent).toBe('0,');
    });

    state = {
        value: 0,
        lastValue: null,
        operation: 'root',
        memoryValue: null,
    };

    valueText = {
        textContent: '0,',
    };

    it("no double commas", () => {
        onCommaClick(state, valueText);
        expect(valueText.textContent).toBe('0,');
    });

});