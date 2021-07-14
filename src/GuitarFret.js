import getNoteName from './getNoteName';

export default function GuitarFret({ noteIndex }) {
  return `${getNoteName(noteIndex)} | `;
}
