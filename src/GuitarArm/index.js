import { range } from 'ramda';
import React from 'react';
import Grid from '../Grid';
import GuitarArmProvider from './GuitarArmProvider';
import GuitarString from './GuitarString';

export default function GuitarArm({ strings, fretCount }) {
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
