
const linearSearch = (array, size, element) => {
  let result = null
  for (let i = 0; i < size; i += 1) {
    if (array[i] === element) {
      result = i
    }
  }
  return result
}

module.exports = { linearSearch }
