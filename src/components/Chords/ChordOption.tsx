import { Chord } from '../../types'
import getNoteName from '../../utils/getNoteName'
import Selectable from '../Selectable'
import useSelectionContext from '../useSelectionContext'

type Props = {
  chord: Chord
}

export default function ChordOption({ chord }: Props) {
  const { selectedChord, setSelectedChord } = useSelectionContext()

  return (
    <Selectable
      value={chord}
      selectedValue={selectedChord}
      onSelect={setSelectedChord}
    >
      {chord.map(getNoteName).join(' ')}
    </Selectable>
  )
}