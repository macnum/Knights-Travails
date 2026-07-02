const KNIGHT_OFFSET = [
	[1, 2],
	[1, -2],
	[-1, 2],
	[-1, -2],
	[2, 1],
	[2, -1],
	[-2, 1],
	[-2, -1],
];

export default function getPossibleMoves(startCoords) {
	return KNIGHT_OFFSET.map((vertices) => {
		return [vertices[0] + startCoords[0], vertices[1] + startCoords[1]];
	}).filter(
		(vertices) =>
			vertices[0] >= 0 &&
			vertices[0] <= 7 &&
			vertices[1] >= 0 &&
			vertices[1] <= 7,
	);
}
