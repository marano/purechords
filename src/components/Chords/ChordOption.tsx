import { ChordType, Note, Scale, ScaleDegree } from '../../types'
import getChordIntervals from '../../utils/getChordIntervals'
import getChordName from '../../utils/getChordName'
import getChord from '../../utils/getChord'
import getNoteName from '../../utils/getNoteName'
import toRoman from '../../utils/toRoman'
import Selectable from '../Selectable'
import useSelectionContext from '../useSelectionContext'

type Props = {
  keyNote: Note
  scale: Scale
  scaleDegree: ScaleDegree
  chordType: ChordType
}

export default function ChordOption({
  keyNote,
  scale,
  scaleDegree,
  chordType,
}: Props) {
  const {
    selectedScaleDegree,
    setSelectedScaleDegree,
  } = useSelectionContext()

  const intervals = getChordIntervals(
    chordType,
    scale,
    scaleDegree
  )

  const chord = getChord(
    scale,
    scaleDegree,
    chordType,
    keyNote
  )

  return (
    <Selectable
      value={scaleDegree}
      selectedValue={selectedScaleDegree}
      onSelect={setSelectedScaleDegree}
    >
      {toRoman(scaleDegree + 1)}
      <br />
      {getChordName(chordType, intervals, keyNote)}
      <br/>
      {chord.map(getNoteName).join(' ')}
    </Selectable>
  )
}
