import { startsWith } from 'ramda';
import { getNoteName, intervalsToNotes, majorScaleIntervals } from './notes';
import Selectable from './Selectable';
import useSelectionContext from './useSelectionContext';

type Props = {
  keyNote: number
}

export default function MajorScale({ keyNote }: Props) {
  const {
    selectedScaleNotes,
    setSelectedScaleNotes,
  } = useSelectionContext();


  const notes = intervalsToNotes(majorScaleIntervals, keyNote)

  const visibleNotes = notes.concat(notes).concat(notes)

  const isSelected = selectedScaleNotes
    ? startsWith(notes, selectedScaleNotes)
    : false

  return (
    <>
      {notes.map(
        (note) => (
          <Selectable
            key={note}
            isSelected={isSelected}
            onSelect={() => setSelectedScaleNotes(visibleNotes)}
          >
            {getNoteName(note)}
          </Selectable>
        ),
      )}
    </>
  )

}
