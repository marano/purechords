import Grid from './Grid';
import MajorScale from './MajorScale';
import { majorScaleIntervals, notes } from './notes';

export default function MajorScales() {
  return (
    <Grid columnCount={majorScaleIntervals.length}>
      {notes.map(
        (note) => <MajorScale key={note} keyNote={note} />,
      )}
    </Grid>
  );
}
