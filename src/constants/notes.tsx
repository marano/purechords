import { isNumber } from 'fp-ts/number'
import { Note } from '../types'

export default Object.values(Note).filter(isNumber)
