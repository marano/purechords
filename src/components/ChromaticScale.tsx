import notes from '../constants/notes'
import getNoteName from '../utils/getNoteName'
import useSelectionContext from './useSelectionContext'
import Grid from './Grid'
import Selectable from './Selectable'

export default function ChromaticScale() {
  const { selectedNote, setSelectedNote } = useSelectionContext()

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
  )
}
