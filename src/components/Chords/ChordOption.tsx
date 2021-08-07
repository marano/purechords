import { ChordType, Interval, Note } from '../../types'
import getChordName from '../../utils/getChordName'
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
