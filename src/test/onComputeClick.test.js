"use strict";

import onComputeClick from "../scripts/calc/operations/onComputeClick";

jest.mock('../scripts/utils/switchLockCalc');

test('1 + 2 must be 3', () => {
    const state = {
        value: 2,
        lastValue: 1,
        operation: 'plus',
        memoryValue: null,
    };
    const textElement = {
        textContent: '',
    };
    onComputeClick(state, textElement);
    expect(state.value).toBe(3);
});

test('8 - 2 must be 6', () => {
    const state = {
        value: 2,
        lastValue: 8,
        operation: 'minus',
        memoryValue: null,
    };
    const textElement = {
        textContent: '',
    };
    onComputeClick(state, textElement);
    expect(state.value).toBe(6);
});

test('3 * 4 must be 12', () => {
    const state = {
        value: 4,
        lastValue: 3,
        operation: 'mult',
        memoryValue: null,
    };
    const textElement = {
        textContent: '',
    };
    onComputeClick(state, textElement);
    expect(state.value).toBe(12);
});

test('18 / 4 must be 4,5', () => {
    const state = {
        value: 4,
        lastValue: 18,
        operation: 'division',
        memoryValue: null,
    };
    const textElement = {
        textContent: '',
    };
    onComputeClick(state, textElement);
    expect(state.value).toBe(4.5);
});

test('Division by zero should handle the error', () => {
    const state = {
        value: 0,
        lastValue: 10,
        operation: 'division',
        memoryValue: null,
    };
    const textElement = {
        textContent: '',
    };
    onComputeClick(state, textElement);
    expect(state.value).toBe('Error');
});

test('2 ^ 4 must be 16', () => {
    const state = {
        value: 4,
        lastValue: 2,
        operation: 'power',
        memoryValue: null,
    };
    const textElement = {
        textContent: '',
    };
    onComputeClick(state, textElement);
    expect(state.value).toBe(16);
});

test('0 ^ 0 must be 1', () => {
    const state = {
        value: 0,
        lastValue: 0,
        operation: 'power',
        memoryValue: null,
    };
    const textElement = {
        textContent: '',
    };
    onComputeClick(state, textElement);
    expect(state.value).toBe(1);
});

test('sqrt(8, -3) must be Error', () => {
    const state = {
        value: -3,
        lastValue: 8,
        operation: 'root',
        memoryValue: null,
    };
    const textElement = {
        textContent: '',
    };
    onComputeClick(state, textElement);
    expect(state.value).toBe('Error');
});

test('sqrt(-8, 3) must be -2', () => {
    const state = {
        value: 3,
        lastValue: -8,
        operation: 'root',
        memoryValue: null,
    };
    const textElement = {
        textContent: '',
    };
    onComputeClick(state, textElement);
    expect(state.value).toBe(-2);
});

test('sqrt(-4, 2) must be Error', () => {
    const state = {
        value: -2,
        lastValue: 4,
        operation: 'root',
        memoryValue: null,
    };
    const textElement = {
        textContent: '',
    };
    onComputeClick(state, textElement);
    expect(state.value).toBe('Error');
});