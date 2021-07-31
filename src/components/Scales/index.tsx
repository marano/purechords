import Grid from '../Grid';
import Scale from './Scale';
import { scaleIntervals, notes } from '../../utils/constants';

export default function Scales() {
  return (
    <Grid columnCount={scaleIntervals.major.length}>
      {notes.map(
        (note) =>
          <Scale
            key={note}
            keyNote={note}
            intervals={scaleIntervals.major}
          />,
      )}
    </Grid>
  );
}
