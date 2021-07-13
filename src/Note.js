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
  const rotatedIndex = index === 12 ? 0 : index;

  return notes[rotatedIndex];
}
