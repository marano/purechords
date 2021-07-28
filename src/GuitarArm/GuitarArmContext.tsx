import { createContext } from 'react';

type Value = {
  fretCount: number
  getNote: (stringIndex: number, fretIndex: number) => number
  isFretHighlighted: (stringIndex: number, fretIndex: number) => boolean
}

export default createContext<Value>(null!);
