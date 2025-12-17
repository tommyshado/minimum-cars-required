import assert from 'assert';
import getMinimumCars from '../src/getMinimumCars';

describe('Minimum Cars Required', function () {

  it('should return the minimum number of cars required to transport two passengers', function () {
    const result = getMinimumCars([1, 4, 1], [1, 5, 1]);
    assert.equal(result, 2);
  });

  it('should return the minimum number of cars required with varying capacities', function () {
    const result = getMinimumCars([4, 4, 2, 4], [5, 5, 2, 5]);
    assert.equal(result, 3);
  });

  it('should return the minimum number of cars when some cars are parked', function () {
    const result = getMinimumCars([2, 3, 4, 2], [2, 5, 7, 2]);
    assert.equal(result, 2);
  });

  it('should return 0 when there are no people', function () {
    const result = getMinimumCars([], [5, 5, 5]);
    assert.equal(result, 0);
  });

  it('should return 0 when there are no cars', function () {
    const result = getMinimumCars([1, 2, 3], []);
    assert.equal(result, 0);
  });

  it('should return 1 when a single car can carry everyone', function () {
    const result = getMinimumCars([1, 1, 1, 1], [10]);
    assert.equal(result, 1);
  });

  it('should return 0 when total capacity is insufficient', function () {
    const result = getMinimumCars([5, 5, 5], [4, 4, 4]);
    assert.equal(result, 0);
  });

  it('should correctly handle exact capacity match', function () {
    const result = getMinimumCars([2, 2, 2], [3, 3]);
    assert.equal(result, 2);
  });

  it('should handle many small cars vs one large car', function () {
    const result = getMinimumCars([1, 1, 1, 1, 1], [5, 1, 1, 1, 1]);
    assert.equal(result, 1);
  });

});