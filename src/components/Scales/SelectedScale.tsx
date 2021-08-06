import getNoteName from '../../utils/getNoteName'
import getScaleNotes from '../../utils/getScaleNotes'
import Grid from '../Grid'
import Separator from '../Separator'
import useSelectionContext from '../useSelectionContext'

export default function SelectedScale() {
  const {
    selectedNote,
    selectedScaleIntervals,
  } = useSelectionContext()

  if (
    selectedNote === undefined
      || selectedScaleIntervals ===  undefined
  ) {
    return null
  }

  const notes = getScaleNotes(
    selectedScaleIntervals,
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