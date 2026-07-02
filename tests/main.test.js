import knightMoves from '../src/main';

describe('check for invalid input', () => {
	test('check if it works for value greater than chess square', () => {
		expect(knightMoves([8, 0], [1, 3])).toBe(null);
	});
	test('check if it works for value greater than chess square', () => {
		expect(knightMoves([3, 8], [1, 9])).toBe(null);
	});

	test('check if it works for value lesser than chess square', () => {
		expect(knightMoves([-8, 0], [-1, -3])).toBe(null);
	});

	test('check if it works for value lesser than chess square', () => {
		expect(knightMoves([-1, 0], [-4, 9])).toBe(null);
	});
});

describe('check for valid move', () => {
	test('check if it returns the shortest path length', () => {
		expect(knightMoves([0, 0], [3, 3]).path.length - 1).toBe(2);
	});
	test('check if it returns the shortest path length', () => {
		expect(knightMoves([0, 0], [7, 7]).path.length - 1).toBe(6);
	});
	test('check if it returns the shortest path length', () => {
		expect(knightMoves([3, 3], [0, 0]).path.length - 1).toBe(2);
	});
});
