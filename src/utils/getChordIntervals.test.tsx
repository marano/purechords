import { ChordType } from '../types'
import scaleIntervals from '../constants/scaleIntervals'
import getChordIntervals from './getChordIntervals'
import chordTraits from '../constants/chordTraits'
import { ScaleNotePosition } from '../types'

const {
  triad,
} = ChordType

const {
  Major,
} = scaleIntervals
const {

  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
} = ScaleNotePosition

describe('getChordIntervals', () => {
  describe('Major scale triads', () => {
    const { maj, min, dim } = chordTraits[triad]

    test('Cmaj', () =>
      expect(getChordIntervals(triad, Major, first)).toEqual(maj)
    )
    test('Dmin', () =>
      expect(getChordIntervals(triad, Major, second)).toEqual(min)
    )
    test('Emin', () =>
      expect(getChordIntervals(triad, Major, third)).toEqual(min)
    )
    test('Fmaj', () =>
      expect(getChordIntervals(triad, Major, fourth)).toEqual(maj)
    )
    test('Gmaj', () =>
      expect(getChordIntervals(triad, Major, fifth)).toEqual(maj)
    )
    test('Amin', () =>
      expect(getChordIntervals(triad, Major, sixth)).toEqual(min)
    )
    test('Bdim', () =>
      expect(getChordIntervals(triad, Major, seventh)).toEqual(dim)
    )
  })
})
