import React from 'react';
import styled from 'styled-components/macro';
import GuitarString from './GuitarString';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columnCount}, 1fr);
  justify-items: center;
  place-items: center;
  grid-gap: 0px;

  div {
    border: 1px solid black;
    width: 100%;
    text-align: center;

    &.open-string {
      border 0;
      text-align: right;
      padding-right: 30px;
    }
  }
`;

export default function GuitarArm({ strings, fretCount }) {
  return (
    <Grid columnCount={fretCount}>
      {strings.map(
        // eslint-disable-next-line react/no-array-index-key
        (string, index) => <GuitarString key={index} noteIndex={string} fretCount={fretCount} />,
      )}
    </Grid>
  );
}
