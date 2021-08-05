import { ScaleNoteIndex } from '../types'

const { first, third, fifth, seventh } = ScaleNoteIndex

export default {
  'Dyad': [first, third],
  'Power Dyad': [first, fifth],
  'Triad': [first, third, fifth],
  'Seventh': [first, third, fifth, seventh],
}