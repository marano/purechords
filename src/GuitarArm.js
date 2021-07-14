import React from 'react';
import GuitarString from './GuitarString';

export default function GuitarArm() {
  return (
    <>
      <GuitarString noteIndex={4} />
      <GuitarString noteIndex={11} />
      <GuitarString noteIndex={7} />
      <GuitarString noteIndex={2} />
      <GuitarString noteIndex={9} />
      <GuitarString noteIndex={4} />
    </>
  );
}
