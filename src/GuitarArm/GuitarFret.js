import React from 'react';
import classNames from 'classnames';
import Note from '../Note';
import useGuitarArmContext from './useGuitarArmContext';

export default function GuitarFret({ stringIndex, fretIndex }) {
  const { getNoteIndex, isFretHighlighted } = useGuitarArmContext();

  const noteIndex = getNoteIndex(stringIndex, fretIndex);

  const className = classNames({
    'open-string': fretIndex === 0,
    highlighted: isFretHighlighted(stringIndex, fretIndex),
  });

  return (
    <div className={className}>
      <Note index={noteIndex} />
    </div>
  );
}
