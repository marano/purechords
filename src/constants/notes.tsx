import { isNumber } from 'fp-ts/number'
import { Note } from '../types'

const noteValues = Object.values(Note).filter(isNumber)

export default noteValues.filter(
  (value, index) => noteValues.indexOf(value) === index
)
