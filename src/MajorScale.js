import React from 'react';
import { equals, sum } from 'ramda';
import { majorScaleIntervals, rotateNoteIndex } from './notes';
import ClickableNote from './ClickableNote';
import useSelectionContext from './useSelectionContext';

export default function MajorScale({ keyIndex }) {
  const {
    selectedNoteSequence,
    setSelectedNoteSequence,
  } = useSelectionContext();

  const notes = majorScaleIntervals
    .map((_, index) => keyIndex + sum(majorScaleIntervals.slice(0, index)))
    .map(rotateNoteIndex);

  return notes.map(
    (note) => (
      <ClickableNote
        key={note}
        index={note}
        isHighlighted={equals(notes, selectedNoteSequence)}
        onClick={() => setSelectedNoteSequence(notes)}
      />
    ),
  );
}
