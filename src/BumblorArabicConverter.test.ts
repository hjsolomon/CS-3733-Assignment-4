import {bumblor2arabic, arabic2bumblor} from "./BumblorArabicConverter.ts";
import {expect, test} from 'vitest'

// Bumblor2Arabic tests

test("bumblor2arabic tests for O", () => {
    expect(bumblor2arabic("O")).toBe(0)
})

test("bumblor2arabic tests for more than 4 M's", () => {
    expect(() => bumblor2arabic("MMMMM")).toThrowError("Malformed Number")
})

test("bumblor2arabic tests for 4000", () => {
    expect(bumblor2arabic("MMMM")).toBe(4000)
})

test("bumblor2arabic tests for more than 1 D", () => {
    expect(() => bumblor2arabic("DD")).toThrowError("Malformed Number")
})

test("bumblor2arabic tests for out of order", () => {
    expect(() => bumblor2arabic("LIV")).toThrowError("Malformed Number")
})

test("bumblor2arabic tests for repeated symbol", () => {
    expect(() => bumblor2arabic("MDM")).toThrowError("Malformed Number")
})




//
// test("bumblor2arabic tests for MMCL", () => {
//     expect(bumblor2arabic("MMCL")).toBe(2150)
// })
//
// test("bumblor2arabic tests for -MMCL", () => {
//     expect(bumblor2arabic("-MMCL")).toBe(-2150)
// })
//
// test("bumblor2arabic tests for MMMMDCCCC", () => {
//     expect(bumblor2arabic("MMMMDCCCC")).toBe(4900)
// })
//
// // test("bumblor2arabic tests for MDD", () => {
// //     expect(bumblor2arabic("MDD")).toBe(2000)
// // })
//
// test("bumblor2arabic tests for III", () => {
//     expect(bumblor2arabic("III")).toBe(3)
// })
//
// // test("bumblor2arabic tests for IV", () => {
// //     expect(bumblor2arabic("IV")).toBe(4)
// // })
// //
// // test("bumblor2arabic tests for IX", () => {
// //     expect(bumblor2arabic("IX")).toBe(9)
// // })
//
// test("bumblor2arabic tests for LVIII", () => {
//     expect(bumblor2arabic("LVIII")).toBe(58)
// })
//
// // test("bumblor2arabic tests for MCMXC", () => {
// //     expect(bumblor2arabic("MCMXC")).toBe(1990)
// // })
// //
// // test("bumblor2arabic tests for MMXXIV", () => {
// //     expect(bumblor2arabic("MMXXIV")).toBe(2024)
// // })
//
// test("bumblor2arabic tests for out of range (above 4999)", () => {
//     expect(() => bumblor2arabic("MMMMM")).toThrowError("Malformed Number")
// })
//
// test("bumblor2arabic tests for out of range (below -4999)", () => {
//     expect(() => bumblor2arabic("-MMMMM")).toThrowError("Malformed Number")
// })
//
// test("bumblor2arabic tests for repeated characters (within 1 for D, L, or V)", () => {
//     expect(() => bumblor2arabic("MMDD")).toThrowError("Malformed Number")
// })
//
// test("bumblor2arabic tests for repeated characters (up to 4 times for C)", () => {
//     expect(() => bumblor2arabic("CCCCC")).toThrowError("Malformed Number")
// })
//
// test("bumblor2arabic tests for repeated characters (within 4)", () => {
//     expect(bumblor2arabic("CCCC")).toBe(400)
// })
//
// test("bumblor2arabic tests for repeated characters (up to 4 times for C)", () => {
//     expect(() => bumblor2arabic("MCCCCC")).toThrowError("Malformed Number")
// })
//
// test("bumblor2arabic tests for invalid characters", () => {
//     expect(() => bumblor2arabic("MMXZIV")).toThrowError("Malformed Number")
// })
//
// test("bumblor2arabic tests for numerals in wrong order", () => {
//     expect(() => bumblor2arabic("IM")).toThrowError("Malformed Number")
// })
//
// // Arabic to Bumblor tests
// test("arabic2bumblor tests for 2150", () => {
//     expect(arabic2bumblor(2150)).toBe("MMCL")
// })
//
// test("arabic2bumblor tests for -2150", () => {
//     expect(arabic2bumblor(-2150)).toBe("-MMCL")
// })
//
// test("arabic2bumblor tests for 4900", () => {
//     expect(arabic2bumblor(4900)).toBe("MMMMDCCCC")
// })
//
// test("arabic2bumblor tests for 2000", () => {
//     expect(arabic2bumblor(2000)).toBe("MM")
// })
//
// test("arabic2bumblor tests for 0", () => {
//     expect(arabic2bumblor(0)).toBe("O")
// })
//
// test("arabic2bumblor tests for 213.57", () => {
//     expect(arabic2bumblor(213.57)).toBe("CCXIII")
// })
//
// test("arabic2bumblor tests for -5000", () => {
//     expect(() => arabic2bumblor(-5000)).toThrowError("Out of Range")
// })
//
// test("arabic2bumblor tests for 5000", () => {
//     expect(() => arabic2bumblor(5000)).toThrowError("Out of Range")
// })
