import chordTypes from '../../constants/chordTypes'
import { Chord, ChordType, Interval } from '../../types'
import getNoteName from '../../utils/getNoteName'
import Selectable from '../Selectable'
import useSelectionContext from '../useSelectionContext'

type Props = {
  chord: Chord
  chordType: ChordType
}

export default function ChordOption({ chord, chordType }: Props) {
  const { selectedChord, setSelectedChord } = useSelectionContext()

  return (
    <Selectable
      value={chord}
      selectedValue={selectedChord}
      onSelect={setSelectedChord}
    >
      {getChordName(chordType, chord)}
      <br/>
      {chord.map(getNoteName).join(' ')}
    </Selectable>
  )
}

function getChordName(chordType: ChordType, chord: Chord) {
  const key = getNoteName(chord[0])
  const secondInterval = Math.abs(chord[1] - chord[0])
  const isMinor = secondInterval === Interval.m3

  switch(chordType) {
  case chordTypes['Dyad']:
    return key

  case chordTypes['Power Dyad']:
    return `${key}5`

  case chordTypes['Triad']:
    return isMinor
      ? `${key} minor`
      : `${key} Major`

  case chordTypes['Seventh']:
    return isMinor
      ? `${key} minor 7`
      : `${key} Major 7`
  }
}