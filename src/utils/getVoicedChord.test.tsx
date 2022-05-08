import { Note } from '../types'
import getVoicedChord from './getVoicedChord'
import chordVoicings from '../constants/chordVoicings'

describe('getVoicedChord', () => {
  test('Cmaj 1/3/5', () =>
    expect(
      getVoicedChord([Note.C, Note.E, Note.G], chordVoicings.Triad[0])
    ).toEqual([Note.C, Note.E, Note.G])
  )

  test('Cmaj 3/5/1', () =>
    expect(
      getVoicedChord([Note.C, Note.E, Note.G], chordVoicings.Triad[1])
    ).toEqual([Note.E, Note.G, Note.C])
  )

  test('Cmaj 1/_/5/3', () =>
    expect(
      getVoicedChord([Note.C, Note.E, Note.G], chordVoicings.Triad[3])
    ).toEqual([Note.C, Note.G, Note.E])
  )
})
