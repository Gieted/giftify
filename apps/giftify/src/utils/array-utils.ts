export function removeAt<T>(array: T[], index: number): T[] {
  return array.splice(index, 1);
}
