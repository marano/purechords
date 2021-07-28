import { createContext } from 'react';
import { Note } from '../../types';

type Value = {
  fretCount: number
  getNote: (stringIndex: number, fretIndex: number) => Note
  isFretHighlighted: (stringIndex: number, fretIndex: number) => boolean
}

export default createContext<Value>(null!);
