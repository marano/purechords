import getNoteName from '../../utils/getNoteName'
import getScaleNotes from '../../utils/getScaleNotes'
import Grid from '../Grid'
import Separator from '../Separator'
import useSelectionContext from '../useSelectionContext'

export default function SelectedScale() {
  const {
    selectedNote,
    selectedScale,
  } = useSelectionContext()

  if (
    selectedNote === undefined
      || selectedScale ===  undefined
  ) {
    return null
  }

  const notes = getScaleNotes(
    selectedScale,
    selectedNote
  )

  return(
    <>
      <Grid columnCount={notes.length} borderless>
        {notes.map(
          note =>
            <div key={note}>
              {getNoteName(note)}
            </div>
        )}
      </Grid>
      <Separator />
    </>
  )
}