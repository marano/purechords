import { Note } from '../types';
import { Eq } from 'fp-ts/number'
import { getEq } from 'fp-ts/Array'
import { majorScaleIntervals } from '../utils/constants';
import { getNoteName, intervalsToNotes } from '../utils/notes';
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

  const isSelected = selectedScaleNotes
    ? getEq(Eq).equals(notes, selectedScaleNotes)
    : false

  return (
    <>
      {notes.map(
        (note) => (
          <Selectable
            key={note}
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
