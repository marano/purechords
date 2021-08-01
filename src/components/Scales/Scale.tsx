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

  return (
    <>
      {notes.map(
        (note, index) => (
          <Selectable
            key={`${index}-${note}`}
            value={notes}
            selectedValue={selectedScaleNotes}
            onSelect={setSelectedScaleNotes}
          >
            {getNoteName(note)}
          </Selectable>
        ),
      )}
    </>
  )
}
