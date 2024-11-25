"use strict";

import formatNumToStr from "../scripts/utils/formatNumToStr";

test('4 must become 4', () => {
    expect(formatNumToStr(4)).toBe('4');
});

test('842.7124 must become 842,7124', () => {
    expect(formatNumToStr(842.7124)).toBe('842,7124');
});