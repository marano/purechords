import { range } from 'fp-ts/NonEmptyArray'
import GuitarFret from './GuitarFret';
import useGuitarArmContext from './useGuitarArmContext';

type Props = {
  stringIndex: number
}

export default function GuitarString({ stringIndex }: Props) {
  const { fretCount } = useGuitarArmContext();

  const fretIndexes = range(0, fretCount - 1);

  return (
    <>
      {fretIndexes.map(
        fretIndex => (
          <GuitarFret
            key={fretIndex}
            fret={[stringIndex, fretIndex]}
          />
        )
      )}
    </>
  );
}
