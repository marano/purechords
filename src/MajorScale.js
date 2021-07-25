import React from 'react';
import { equals, sum } from 'ramda';
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

  return notes.map(
    (note) => (
      <Selectable
        key={note}
        isSelected={equals(notes, selectedNoteSequence)}
        onSelect={() => setSelectedNoteSequence(notes)}
      >
        <NoteName note={note} />
      </Selectable>
    ),
  );
}
