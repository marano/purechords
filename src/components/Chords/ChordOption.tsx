import chordTypes from '../../constants/chordTypes'
import { ChordType, Interval, Note } from '../../types'
import getNoteName from '../../utils/getNoteName'
import intervalsToNotes from '../../utils/intervalsToNotes'
import Selectable from '../Selectable'
import useSelectionContext from '../useSelectionContext'

type Props = {
  keyNote: Note
  chordType: ChordType
  intervals: Interval[]
}

export default function ChordOption({ keyNote, chordType, intervals }: Props) {
  const { selectedChord, setSelectedChord } = useSelectionContext()

  const chord = intervalsToNotes(intervals, keyNote)

  return (
    <Selectable
      value={chord}
      selectedValue={selectedChord}
      onSelect={setSelectedChord}
    >
      {getChordName(chordType, intervals, keyNote)}
      <br/>
      {chord.map(getNoteName).join(' ')}
    </Selectable>
  )
}

function getChordName(chordType: ChordType, intervals: Interval[], keyNote: Note) {
  const secondInterval = intervals[1]
  const thirdInterval = intervals[2]

  const isMinor = secondInterval === Interval.m3
  const isDiminished = thirdInterval === Interval.m3 * 2

  const keyNoteName = getNoteName(keyNote)

  switch(chordType) {
  case chordTypes['Dyad']:
    return keyNoteName

  case chordTypes['Power Dyad']:
    return `${keyNoteName}5`

  case chordTypes['Triad']:
    return isMinor
      ? `${keyNoteName}m`
      : isDiminished
        ? `${keyNoteName}dim`
        : keyNoteName

  case chordTypes['Seventh']:
    return isMinor
      ? `${keyNoteName}m7`
      :  isDiminished
        ? `${keyNoteName}dim7`
        : `${keyNoteName}7`
  }
}