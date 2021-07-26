import React from 'react';
import { startsWith } from 'ramda';
import { getNoteName, intervalsToNotes, majorScaleIntervals } from './notes';
import Selectable from './Selectable';
import useSelectionContext from './useSelectionContext';

export default function MajorScale({ keyNote }) {
  const {
    selectedScaleNotes,
    setSelectedScaleNotes,
  } = useSelectionContext();


  const notes = intervalsToNotes(majorScaleIntervals, keyNote)

  const visibleNotes = notes.concat(notes).concat(notes)

  return notes.map(
    (note) => (
      <Selectable
        key={note}
        isSelected={selectedScaleNotes && startsWith(notes, selectedScaleNotes)}
        onSelect={() => setSelectedScaleNotes(visibleNotes)}
      >
        {getNoteName(note)}
      </Selectable>
    ),
  );
}
