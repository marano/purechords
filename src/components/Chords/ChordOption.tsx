import { Interval, Note } from '../../types'
import areNumberArraysEquals from '../../utils/areNumberArraysEquals'
import getNoteName from '../../utils/getNoteName'
import intervalsToNotes from '../../utils/intervalsToNotes'
import Selectable from '../Selectable'
import useSelectionContext from '../useSelectionContext'

type Props = {
  note: Note
  intervals: Interval[]
}

export default function ChordOption({ note, intervals }: Props) {
  const { selectedChord, setSelectedChord } = useSelectionContext()

  const chord = intervalsToNotes(intervals, note)

  return (
    <Selectable
      isSelected={selectedChord ? areNumberArraysEquals(selectedChord, chord) : false}
      onSelect={() => setSelectedChord(chord)}
    >
      {chord.map(getNoteName).join(' ')}
    </Selectable>
  )
}