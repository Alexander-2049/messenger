export function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function randomFloatNeg1_5To1_5(): number {
  return randomFloat(-1.5, 1.5);
}
