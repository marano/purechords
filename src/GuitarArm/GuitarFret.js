import React from 'react';
import classNames from 'classnames';
import Note from '../Note';
import useGuitarArmContext from './useGuitarArmContext';
import useHighlightedNote from '../useHighlightedNote';

export default function GuitarFret({ stringIndex, fretIndex }) {
  const { getNoteIndex } = useGuitarArmContext();
  const { highlightedNote } = useHighlightedNote();

  const noteIndex = getNoteIndex(stringIndex, fretIndex);

  const className = classNames({
    'open-string': fretIndex === 0,
    highlighted: highlightedNote === noteIndex,
  });

  return (
    <div className={className}>
      <Note index={noteIndex} />
    </div>
  );
}
