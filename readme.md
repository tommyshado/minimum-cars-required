# Minimum Cars Required 🚗

[![Node.js CI](https://github.com/tommyshado/minimum-cars-required/actions/workflows/node.js.yml/badge.svg)](https://github.com/tommyshado/minimum-cars-required/actions/workflows/node.js.yml)

## Problem Description

A group of friends is going on a trip. They all meet at a starting point using **N cars**.

Each car is represented by two arrays:

- `P[K]`: the number of people who traveled to the meeting point in car `K`
- `S[K]`: the number of seats available in car `K`

People are allowed to move between cars before leaving.  
The goal is to **use as few cars as possible** to transport everyone and leave the remaining cars parked.

---

## Function Signature

```ts
getMinimumCars(P: number[], S: number[]): number```

---

## Getting Started ✅

**Prerequisites:**

- **Node.js** (v16+ recommended)
- **npm** (bundled with Node.js)

**Install dependencies:**

```bash
npm install
```

> Tip: If you use a Node version manager, make sure your active Node version meets the prerequisite.

## Running Tests ✅

Run the test suite with npm:

```bash
npm test
```

The project uses `ts-mocha` to run the TypeScript tests located in the `test/` directory.