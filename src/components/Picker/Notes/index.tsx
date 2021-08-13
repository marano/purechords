import notes from '../../../constants/notes'
import getNoteName from '../../../utils/getNoteName'
import Grid from '../../Grid'
import Selectable from '../../Selectable'
import Separator from '../../Separator'
import useSelectionContext from '../../useSelectionContext'
import usePickerContext from '../usePickerContext'

export default function Notes() {
  const { selectedNote } = useSelectionContext()
  const { setSelectedNote } = usePickerContext()

  return (
    <>
      <Grid columnCount={notes.length}>
        {notes.map(
          note =>
            <Selectable
              key={note}
              value={note}
              selectedValue={selectedNote}
              onSelect={setSelectedNote}
            >
              {getNoteName(note)}
            </Selectable>
        )}
      </Grid>
      <Separator />
    </>
  )
}
