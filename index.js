
const betterLinearSearch = (array, size, key) => {
  for (let i = 0; i < size; i += 1) {
    if (array[i] === key) {
      return i
    }
  }
  return null
}

const linearSearch = (array, size, key) => {
  let result = null
  for (let i = 0; i < size; i += 1) {
    if (array[i] === key) {
      result = i
    }
  }
  return result
}

module.exports = { betterLinearSearch, linearSearch }
