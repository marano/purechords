import { Fret, Note } from '../../types';
import { getFrets } from '../../utils/frets';
import Grid from '../Grid';
import GuitarArmProvider from './GuitarArmProvider';
import GuitarFret from './GuitarFret';

type Props = {
  strings: Note[]
  fretCount: number
}

export default function GuitarArm({ strings, fretCount }: Props) {
  const frets = getFrets(0, strings.length, 0, fretCount)

  return (
    <GuitarArmProvider strings={strings} fretCount={fretCount}>
      <Grid columnCount={fretCount}>
        {frets.map(fret => <GuitarFret key={key(fret)} fret={fret} />)}
      </Grid>
    </GuitarArmProvider>
  );
}

function key(fret: Fret) {
  return `${fret[0]}-${fret[1]}`
}