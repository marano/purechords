import notes from '../../constants/notes'
import scaleIntervals from '../../constants/scaleIntervals'
import Grid from '../Grid'
import ScaleOption from './ScaleOption'

export default function Scales() {
  return (
    <Grid columnCount={scaleIntervals.major.length - 1}>
      {notes.map(
        (note) =>
          <ScaleOption
            key={note}
            scale={{ key: note, intervals: scaleIntervals.major }}
          />
      )}
    </Grid>
  )
}
