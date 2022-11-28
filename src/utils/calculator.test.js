import { sum, difference } from './calculator'

import { describe, it, expect } from 'vitest'

describe('#sum', () => {
  it('should return 0 with no numbers', () => {
    expect(sum([])).toBe(0)
  })

  it('should return the sum of the numbers', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15)
  })

  it('should return the same number if only one number is passed', () => {
    expect(sum([2])).toBe(2)
  })
})

describe('#difference', () => {
  it('should return 0 with no numbers', () => {
    expect(sum([])).toBe(0)
  })

  it('should return the difference of the numbers', () => {
    expect(difference([100, 10, 20])).toBe(70)
  })

  it('should return the same number if only one number is passed', () => {
    expect(difference([25])).toBe(25)
  })
})
