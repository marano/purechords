import notes from '../../constants/notes'
import scaleIntervals from '../../constants/scaleIntervals'
import Grid from '../Grid'
import Scale from './Scale'

export default function Scales() {
  return (
    <Grid columnCount={scaleIntervals.major.length}>
      {notes.map(
        (note) =>
          <Scale
            key={note}
            keyNote={note}
            intervals={scaleIntervals.major}
          />
      )}
    </Grid>
  )
}
