import { range } from 'ramda';
import React from 'react';
import styled from 'styled-components/macro';
import Grid from '../Grid';
import GuitarArmProvider from './GuitarArmProvider';
import GuitarString from './GuitarString';

const GuitarArmGrid = styled(Grid)`
  .open-string {
    margin-left: -2px;
    margin-top: -2px;
    margin-bottom: -2px;
    padding-right: 2px;
    padding-bottom: 2px;
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
