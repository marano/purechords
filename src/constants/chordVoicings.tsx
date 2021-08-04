const first = 0
const third = 1
const fifth = 2
const seventh = 3

export default [
  [first, third, fifth, seventh],
  [first, fifth, seventh, third],
  [fifth, first, third, seventh],
  [third, seventh, first, fifth],
  [seventh, third, fifth, first],
  [first, null, seventh, third, fifth],
]
