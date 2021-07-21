import React from 'react';
import { sum } from 'ramda';
import { majorScaleIntervals, rotateNoteIndex } from './notes';
import ClickableNote from './ClickableNote';
import useHighlightedNote from './useHighlightedNote';

export default function MajorScale({ keyIndex }) {
  const { highlightedNote, setHighlightedNoteSequence } = useHighlightedNote();

  const notes = majorScaleIntervals
    .map((_, index) => keyIndex + sum(majorScaleIntervals.slice(0, index)))
    .map(rotateNoteIndex);

  return notes.map(
    (noteIndex) => (
      <ClickableNote
        key={noteIndex}
        index={noteIndex}
        isHighlighted={noteIndex === highlightedNote}
        onClick={() => setHighlightedNoteSequence(notes)}
      />
    ),
  );
}
