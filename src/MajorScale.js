import React from 'react';
import { startsWith, sum } from 'ramda';
import { majorScaleIntervals, rotateNoteIndex } from './notes';
import Selectable from './Selectable';
import NoteName from './NoteName';
import useSelectionContext from './useSelectionContext';

export default function MajorScale({ keyIndex }) {
  const {
    selectedNoteSequence,
    setSelectedNoteSequence,
  } = useSelectionContext();


  const notes = majorScaleIntervals
    .map((_, index) => keyIndex + sum(majorScaleIntervals.slice(0, index)))
    .map(rotateNoteIndex);

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
