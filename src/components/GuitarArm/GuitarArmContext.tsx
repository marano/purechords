import { createContext } from 'react';
import { Fret, Note } from '../../types';

type Value = {
  fretCount: number
  getNote: (fret: Fret) => Note
  isFretHighlighted: (fret: Fret) => boolean
}

export default createContext<Value>(null!);
