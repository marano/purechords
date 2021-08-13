import { ChordType, Note, Scale, ScaleDegree } from '../../../types'
import getChord from '../../../utils/getChord'
import getChordIntervals from '../../../utils/getChordIntervals'
import getChordName from '../../../utils/getChordName'
import getNoteName from '../../../utils/getNoteName'
import toRoman from '../../../utils/toRoman'
import Selectable from '../../Selectable'
import useSelectionContext from '../../useSelectionContext'
import usePickerContext from '../usePickerContext'

type Props = {
  scaleKey: Note
  scale: Scale
  scaleDegree: ScaleDegree
  chordType: ChordType
}

export default function ChordOption({
  scaleKey,
  scale,
  scaleDegree,
  chordType,
}: Props) {
  const { selectedScaleDegree } = useSelectionContext()
  const { setSelectedScaleDegree } = usePickerContext()

  const intervals = getChordIntervals(
    chordType,
    scale,
    scaleDegree
  )

  const chord = getChord(
    scale,
    scaleKey,
    scaleDegree,
    chordType
  )

  const chordKey = chord[0]

  return (
    <Selectable
      value={scaleDegree}
      selectedValue={selectedScaleDegree}
      onSelect={setSelectedScaleDegree}
    >
      {toRoman(scaleDegree + 1)}
      <br />
      {getChordName(chordType, intervals, chordKey)}
      <br/>
      {chord.map(getNoteName).join(' ')}
    </Selectable>
  )
}
