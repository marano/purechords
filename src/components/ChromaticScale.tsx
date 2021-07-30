import { notes } from '../utils/constants';
import { getNoteName } from '../utils/notes';
import Grid from './Grid';
import Selectable from './Selectable';
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
            {getNoteName(note)}
          </Selectable>
        ),
      )}
    </Grid>
  );
}
