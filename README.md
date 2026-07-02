# Knights Travails

A JavaScript implementation that finds the shortest path a knight can take between any two squares on a chessboard, built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## How it works

The algorithm uses **Breadth-First Search (BFS)** to explore all possible knight moves level by level, guaranteeing the shortest path is found first.

Each chessboard square is treated as a node in a graph, and each valid knight move is an edge connecting two nodes.

## Usage

```javascript
import knightMoves from './src/knightMoves.js';

const result = knightMoves([0, 0], [3, 3]);
console.log(result);
// { position: [3, 3], path: [[0,0], [1,2], [3,3]] }
```

## Rules

- Board is 8×8 (coordinates 0–7)
- Returns `null` for coordinates outside the board
- The knight moves in an L-shape: 2 squares in one direction, 1 square perpendicular

## Running Tests

```bash
npm install
npm test
```

## Project Structure

```
src/
  knightMoves.js      # main BFS algorithm
  getPossibleMoves.js # generates valid knight moves
  formatOutput.js     # formats result as a string
tests/
  knightMoves.test.js # Jest tests
```
