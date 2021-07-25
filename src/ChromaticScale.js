import React from 'react';
import Grid from './Grid';
import Selectable from './Selectable';
import NoteName from './NoteName';
import { notes } from './notes';
import useSelectionContext from './useSelectionContext';

export default function ChromaticScale() {
  const { selectedNote, setSelectedNote } = useSelectionContext();

  return (
    <Grid columnCount={12}>
      {notes.map(
        (note) => (
          <Selectable
            key={note}
            isSelected={note === selectedNote}
            onSelect={() => setSelectedNote(note)}
          >
            <NoteName note={note} />
          </Selectable>
        ),
      )}
    </Grid>
  );
}
