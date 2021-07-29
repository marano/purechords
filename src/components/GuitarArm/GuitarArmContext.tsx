import { createContext } from 'react';
import { Fret, Note } from '../../types';

type Value = {
  getNote: (fret: Fret) => Note
  isFretHighlighted: (fret: Fret) => boolean
}

export default createContext<Value>(null!);
