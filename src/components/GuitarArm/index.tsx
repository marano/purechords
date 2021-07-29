import { Note } from '../../types';
import { getFrets } from '../../utils/frets';
import Grid from '../Grid';
import GuitarArmProvider from './GuitarArmProvider';
import GuitarFret from './GuitarFret';

type Props = {
  strings: Note[]
  fretCount: number
}

export default function GuitarArm({ strings, fretCount }: Props) {
  const frets = getFrets(0, strings.length - 1, 0, fretCount - 1)

  return (
    <GuitarArmProvider strings={strings} fretCount={fretCount}>
      <Grid columnCount={fretCount}>
        {frets.map(fret => <GuitarFret key={`${fret[0]}-${fret[1]}`} fret={fret} />)}
      </Grid>
    </GuitarArmProvider>
  );
}
