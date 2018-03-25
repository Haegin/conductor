const type = require('../src/type')

class Person {}

describe('type', () => {
  it('should return the input\'s type', () => {
    expect(type('hello')).toBe('string')
    expect(type(true)).toBe('boolean')
    expect(type(2)).toBe('number')
    expect(type([])).toBe('array')
    expect(type({})).toBe('object')
    expect(type(new Date())).toBe('date')
    expect(type(new Map())).toBe('map')
    expect(type(new Set())).toBe('set')
    expect(type(() => {})).toBe('function')
    expect(type(new Person())).toBe('person')
  })
})
