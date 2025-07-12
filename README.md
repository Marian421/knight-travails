# knight-travails

A simple algorithmic visualization that calculates the **shortest path** a knight can take on an 8x8 chessboard, using **Breadth-First Search (BFS)**.

## Table of contents

- [Description](#-description)
- [Demo](#-demo)
- [Tech stack](#tech-stach)
- [Features](#tech-stach)
- [How to run](#how-to-run)

## 📝 Description

This project simulates a knight's movement on a standard chessboard and determines the minimum number of moves required to reach a target position from a starting position. It leverages the BFS algorithm to explore the board efficiently.

## 📸 Demo

```js
// Example usage:
knightMoves([3, 3], [0, 0]);
// Output: shortest path as an array of coordinate pairs
```
```bash
[ [ 3, 3 ],
  [ 1, 2 ],
  [ 0, 0 ] ]
```

## Tech stach

- Javascrit (ES6)

## Features

- Uses Breadth-First Search for pathfinding
- Calculates valid knight moves with board boundaries
- Tracks predecessors to reconstruct the full path

## How to run

1. Clone the repository
2. Open the file in a browser console or Node environment
3. Use **knightMoves(start, end)** to get the path