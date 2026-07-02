export default function knightMoves(startCoords, endCoords) {
	if (startCoords === null) return null;
	if (
		startCoords[0] > 7 ||
		startCoords[0] < 0 ||
		startCoords[1] > 7 ||
		startCoords[1] < 0 ||
		endCoords[0] > 7 ||
		endCoords[0] < 0 ||
		endCoords[1] > 7 ||
		endCoords[1] < 0
	)
		return null;

	const queue = [{ position: startCoords, path: [startCoords] }];
	const visited = new Set();
	visited.add(`${startCoords[0]},${startCoords[1]}`);

	while (queue.length > 0) {
		const current = queue.shift();
		const currentCoords = current.position;

		if (
			currentCoords[0] === endCoords[0] &&
			currentCoords[1] === endCoords[1]
		) {
			return current;
		}

		const possibleMoves = getPossibleMoves(currentCoords);

		const matched = possibleMoves.filter(
			(target) => !visited.has(`${target[0]},${target[1]}`),
		);

		for (let vertex of matched) {
			visited.add(`${vertex[0]},${vertex[1]}`);
			queue.push({ position: vertex, path: [...current.path, vertex] });
		}
	}
}
import getPossibleMoves from './getPossibleMoves.js';
