import { Eq } from 'fp-ts/number'
import { getEq } from 'fp-ts/Array'
import { Interval, Note } from '../../types'
import getNoteName from '../../utils/getNoteName'
import intervalsToNotes from '../../utils/intervalsToNotes'
import Selectable from '../Selectable'
import useSelectionContext from '../useSelectionContext'

type Props = {
  keyNote: Note,
  intervals: Interval[]
}

export default function MajorScale({ keyNote, intervals }: Props) {
  const {
    selectedScaleNotes,
    setSelectedScaleNotes,
  } = useSelectionContext()

  const notes = intervalsToNotes(intervals, keyNote)

  const isSelected = selectedScaleNotes
    ? getEq(Eq).equals(notes, selectedScaleNotes)
    : false

  return (
    <>
      {notes.map(
        (note, index) => (
          <Selectable
            key={`${index}-${note}`}
            isSelected={isSelected}
            onSelect={() => setSelectedScaleNotes(notes)}
          >
            {getNoteName(note)}
          </Selectable>
        ),
      )}
    </>
  )
}
