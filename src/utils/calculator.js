export function sum(numbers) {
  if (!numbers || !Array.isArray(numbers)) return 0

  return numbers.reduce((total, number) => total + number, 0)
}

export function difference(numbers) {
  return numbers.reduce((total, number) => total - number)
}
