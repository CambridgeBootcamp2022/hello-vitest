export function sum(numbers) {
  return numbers.reduce((total, number) => total + number, 0)
}

export function difference(numbers) {
  return numbers.reduce((total, number) => total - number)
}
