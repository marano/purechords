import { range } from 'ramda';
import React from 'react';
import styled from 'styled-components/macro';
import Grid from './Grid';
import GuitarArmProvider from './GuitarArmProvider';
import GuitarString from './GuitarString';

const GuitarArmGrid = styled(Grid)`
  .open-string {
    border 0;
  }
`;

export default function GuitarArm({ strings, fretCount }) {
  const stringIndexes = range(0, strings.length);

  return (
    <GuitarArmProvider strings={strings} fretCount={fretCount}>
      <GuitarArmGrid columnCount={fretCount}>
        {stringIndexes.map(
          (stringIndex) => <GuitarString key={stringIndex} stringIndex={stringIndex} />,
        )}
      </GuitarArmGrid>
    </GuitarArmProvider>
  );
}
