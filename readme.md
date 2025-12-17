# Minimum Cars Required 🚗

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
getMinimumCars(P: number[], S: number[]): number
