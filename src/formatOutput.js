import knightMoves from './main.js';
const test = knightMoves([0, 0], [3, 3]);
function knightMovesStringMessage(result) {
	const formattedPath = result.path
		.map((coord) => `[${coord.join(', ')}]`)
		.join('\n');
	return `You made it in ${result.path.length - 1} moves!  Here's your path: ${formattedPath}`;
}

console.log(test);
console.log(knightMovesStringMessage(test));
