export default function getMinimumCars(
  numberOfPeople: number[],
  carCapacity: number[]
): number {
  if (numberOfPeople.length === 0 || carCapacity.length === 0) {
    return 0;
  }
  
  const totalPeople = numberOfPeople.reduce((sum, p) => sum + p, 0);
  
  // Sort capacities from largest to smallest
  const sortedCapacities = [...carCapacity].sort((a, b) => b - a);
  
  let usedCapacity = 0;
  let carsUsed = 0;
  
  for (const capacity of sortedCapacities) {
    usedCapacity += capacity;
    carsUsed++;
    if (usedCapacity >= totalPeople) {
      return carsUsed;
    }
  }
  
  // Not enough total capacity to carry everyone
  return 0;
}