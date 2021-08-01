import notes from '../../constants/notes'
import Grid from '../Grid'
import Separator from '../Separator'
import useSelectionContext from '../useSelectionContext'
import ScaleOption from './ScaleOption'

export default function ScaleSelection() {
  const { selectedScaleIntervals} = useSelectionContext()

  if (selectedScaleIntervals === undefined) {
    return null
  }

  return (
    <>
      <Grid columnCount={selectedScaleIntervals.length - 1}>
        {notes.map(
          (note) =>
            <ScaleOption
              key={note}
              scale={{ key: note, intervals: selectedScaleIntervals }}
            />
        )}
      </Grid>
      <Separator />
    </>
  )
}
