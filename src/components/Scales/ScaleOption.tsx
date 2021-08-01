import { Scale } from '../../types'
import getNoteName from '../../utils/getNoteName'
import intervalsToNotes from '../../utils/intervalsToNotes'
import Selectable from '../Selectable'
import useSelectionContext from '../useSelectionContext'

type Props = {
  scale: Scale
}

export default function ScaleOption({ scale }: Props) {
  const {
    selectedScale,
    setSelectedScale,
  } = useSelectionContext()

  const notes = intervalsToNotes(scale.intervals, scale.key)

  return (
    <>
      {notes.map(
        (note, index) => (
          <Selectable
            key={`${index}-${note}`}
            value={scale}
            selectedValue={selectedScale}
            onSelect={setSelectedScale}
          >
            {getNoteName(note)}
          </Selectable>
        )
      )}
    </>
  )
}
