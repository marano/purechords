import React from 'react';
import { startsWith } from 'ramda';
import { intervalsToNotes, majorScaleIntervals } from './notes';
import Selectable from './Selectable';
import NoteName from './NoteName';
import useSelectionContext from './useSelectionContext';

export default function MajorScale({ keyNote }) {
  const {
    selectedNoteSequence,
    setSelectedNoteSequence,
  } = useSelectionContext();


  const notes = intervalsToNotes(majorScaleIntervals, keyNote)

  const visibleNotes = notes.concat(notes).concat(notes)

  return notes.map(
    (note) => (
      <Selectable
        key={note}
        isSelected={selectedNoteSequence && startsWith(notes, selectedNoteSequence)}
        onSelect={() => setSelectedNoteSequence(visibleNotes)}
      >
        <NoteName note={note} />
      </Selectable>
    ),
  );
}
