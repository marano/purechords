import React from 'react';
import { startsWith } from 'ramda';
import { getNoteName, intervalsToNotes, majorScaleIntervals } from './notes';
import Selectable from './Selectable';
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
        {getNoteName(note)}
      </Selectable>
    ),
  );
}
