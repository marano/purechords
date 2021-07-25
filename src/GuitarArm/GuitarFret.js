import React from 'react';
import classNames from 'classnames';
import Note from '../Note';
import useGuitarArmContext from './useGuitarArmContext';

export default function GuitarFret({ stringIndex, fretIndex }) {
  const { getNote, isFretHighlighted } = useGuitarArmContext();

  const note = getNote(stringIndex, fretIndex);

  const className = classNames({
    'open-string': fretIndex === 0,
    highlighted: isFretHighlighted(stringIndex, fretIndex),
  });

  return (
    <div className={className}>
      <Note note={note} />
    </div>
  );
}
