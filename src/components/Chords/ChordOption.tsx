import { ChordType, Interval, Note } from '../../types'
import getChordName from '../../utils/getChordName'
import getNoteName from '../../utils/getNoteName'
import intervalsToNotes from '../../utils/intervalsToNotes'
import toRoman from '../../utils/toRoman'
import Selectable from '../Selectable'
import useSelectionContext from '../useSelectionContext'

type Props = {
  chordIndex: number
  keyNote: Note
  chordType: ChordType
  intervals: Interval[]
}

export default function ChordOption({
  chordIndex,
  keyNote,
  chordType,
  intervals,
}: Props) {
  const {
    selectedChord,
    setSelectedChord,
  } = useSelectionContext()

  const chord = intervalsToNotes(intervals, keyNote)

  return (
    <Selectable
      value={chord}
      selectedValue={selectedChord}
      onSelect={setSelectedChord}
    >
      {toRoman(chordIndex + 1)}
      <br />
      {getChordName(chordType, intervals, keyNote)}
      <br/>
      {chord.map(getNoteName).join(' ')}
    </Selectable>
  )
}
