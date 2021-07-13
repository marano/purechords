const notes = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];

export default function Note({ index }) {
  const rotatedIndex = index - (notes.length * Math.floor(index / notes.length));

  return notes[rotatedIndex];
}
