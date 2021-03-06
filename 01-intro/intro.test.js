// import { sum, nativeNull } from "./intro";
const { sum, nativeNull } = require("./intro");

describe('Sum function', () => {
	test('Should return sum ot two values', () => {
		expect(sum(1, 3)).toBe(4);
		expect(sum(1, 3)).toEqual(4);
	});

	test('Should return value correctly comparing to other values', () => {
		expect(sum(1, 3)).toBeGreaterThan(3);
		expect(sum(1, 3)).toBeGreaterThanOrEqual(4);
		expect(sum(1, 3)).toBeLessThanOrEqual(4);
		expect(sum(2, 3)).toBeLessThan(6);
	})
	test('Should sum 2 foat values correctly', () => {
		expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
	})
})

describe('Native null', () => {
	test('Should return false value null', () => {
		expect(nativeNull()).toBe(null);
		expect(nativeNull()).toBeNull();
		expect(nativeNull()).toBeFalsy(); // undefined, null, 0, ''
		expect(nativeNull()).toBeDefined();
		expect(nativeNull()).not.toBeTruthy(); // обратное значение Falsy
	})
})