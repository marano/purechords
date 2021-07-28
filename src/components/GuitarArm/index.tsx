import { range } from 'ramda';
import { Note } from '../../types';
import Grid from '../Grid';
import GuitarArmProvider from './GuitarArmProvider';
import GuitarString from './GuitarString';

type Props = {
  strings: Note[]
  fretCount: number
}

export default function GuitarArm({ strings, fretCount }: Props) {
  const stringIndexes = range(0, strings.length);

  return (
    <GuitarArmProvider strings={strings} fretCount={fretCount}>
      <Grid columnCount={fretCount}>
        {stringIndexes.reverse().map(
          (stringIndex) => <GuitarString key={stringIndex} stringIndex={stringIndex} />,
        )}
      </Grid>
    </GuitarArmProvider>
  );
}
