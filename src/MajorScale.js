import React from 'react';
import { equals, sum } from 'ramda';
import { majorScaleIntervals, rotateNoteIndex } from './notes';
import ClickableNote from './ClickableNote';
import useHighlightedNote from './useHighlightedNote';

export default function MajorScale({ keyIndex }) {
  const {
    highlightedNote,
    highlightedNoteSequence,
    setHighlightedNoteSequence,
  } = useHighlightedNote();

  const notes = majorScaleIntervals
    .map((_, index) => keyIndex + sum(majorScaleIntervals.slice(0, index)))
    .map(rotateNoteIndex);

  return notes.map(
    (noteIndex) => (
      <ClickableNote
        key={noteIndex}
        index={noteIndex}
        isHighlighted={
          noteIndex === highlightedNote || equals(notes, highlightedNoteSequence)
        }
        onClick={() => setHighlightedNoteSequence(notes)}
      />
    ),
  );
}
