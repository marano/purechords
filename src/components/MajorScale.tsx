import { Note } from '../types';
import areNumberArraysEquals from '../utils/areNumberArraysEquals';
import { getNoteName, intervalsToNotes, majorScaleIntervals } from '../utils/notes';
import Selectable from './Selectable';
import useSelectionContext from './useSelectionContext';

type Props = {
  keyNote: Note
}

export default function MajorScale({ keyNote }: Props) {
  const {
    selectedScaleNotes,
    setSelectedScaleNotes,
  } = useSelectionContext();


  const notes = intervalsToNotes(majorScaleIntervals, keyNote)

  const visibleNotes = notes.concat(notes).concat(notes)

  const isSelected = selectedScaleNotes
    ? areNumberArraysEquals(notes, selectedScaleNotes.slice(0, notes.length))
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
