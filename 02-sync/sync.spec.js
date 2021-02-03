const Lodash = require("./sync");

let _ = new Lodash();
describe("Lodash, compact", () => {

	// Запускается перед каждым тестом
	beforeEach(() => {
		array = [false, 42, 0, '', true, null, 777, 'hello'];
	})

	// Запускается после каждого теста
	afterEach(() => {
		_ = new Lodash();
	})

	test("should be defined", () => {
		expect(_.compact).toBeDefined()
		expect(_.compact).not.toBeUndefined()
	});
	test('remove Falsy values from array', () => {
		const result = [42, true, 777, 'hello']
		expect(_.compact(array)).toEqual(result)
	})
	test("should not contain falsy values", () => {
		expect(_.compact(array)).not.toBeFalsy()
	})
})

describe('Lodash: groupBy', () => {

	test('should be defined', () => {
		expect(_.groupBy).toBeDefined()
		expect(_.groupBy).not.toBeUndefined()
	})

	test('should group array items by Math.floor', () => {
		const array = [2.2, 2.4, 4.2, 3.1]
		const result = {
			2: [2.2, 2.4],
			4: [4.2],
			3: [3.1]
		}
		expect(_.groupBy(array, Math.floor)).toEqual(result)
	})

	test('should group array items by length', () => {
		const array = ['one', 'two', 'three']
		const result = {
			5: ['three'],
			3: ['one', 'two']
		}
		expect(_.groupBy(array, 'length')).toEqual(result)
	})

	test('should NOT return array', () => {
		expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
	})

})  