const test = require('ava')

const { betterLinearSearch, linearSearch } = require('./')

let arr = []

test.beforeEach(t => {
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
})

test('betterLinearSearch should return the index of the first element found', t => {
  t.is(betterLinearSearch(arr, arr.length, 0), 0)
})

test('betterLinearSearch should return null if element not found', t => {
  t.is(betterLinearSearch(arr, arr.length, -1), null)
})

test('linearSearch should return the index of the last element found', t => {
  t.is(linearSearch(arr, arr.length, 0), 10)
})

test('linearSearch should return null if element not found', t => {
  t.is(linearSearch(arr, arr.length, -1), null)
})
