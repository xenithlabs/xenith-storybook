type HSLA = {
    h: number;
    s: number;
    l: number;
    a: number;
};
/**
 * Converts a hex color string (with or without opacity) to an HSLA object.
 * @param hex - The hex color string (e.g., "#afaf12", "#ffa", "#afaf12ff", "#ffaa").
 * @returns An HSLA object with { h, s, l, a } values.
 * @example
 * hexToHSLA("#afaf12"); // { h: 60, s: 81, l: 37, a: 1 }
 * hexToHSLA("#ffa");    // { h: 60, s: 100, l: 80, a: 1 }
 * hexToHSLA("#123456"); // { h: 210, s: 65, l: 20, a: 1 }
 * hexToHSLA("#ZZZ");    // throws Error: Invalid hex string
 */
export declare function hexToHSLA(hex: string): HSLA;
export {};
//# sourceMappingURL=colors.d.ts.map