import chordVoicings from '../../constants/chordVoicings'
import getNoteName from '../../utils/getNoteName'
import getVoicingName from '../../utils/getVoicingName'
import Grid from '../Grid'
import Selectable from '../Selectable'
import Separator from '../Separator'
import useSelectionContext from '../useSelectionContext'

export default function Voicings() {
  const {
    selectedNote,
    selectedScale,
    selectedChordType,
    selectedChord,
    selectedVoicing,
    setSelectedVoicing,
  } = useSelectionContext()

  if (
    selectedNote === undefined
    || selectedScale === undefined
    || selectedChordType === undefined
    || selectedChord === undefined
  ) {
    return null
  }

  const voicings = chordVoicings[selectedChordType]

  if (voicings.length === 0) {
    return null
  }

  return (
    <>
      <Grid columnCount={voicings.length}>
        {voicings.map(
          voicing =>
            <Selectable
              key={getVoicingName(voicing)}
              value={voicing}
              selectedValue={selectedVoicing}
              onSelect={setSelectedVoicing}
            >
              {getVoicingName(voicing)}
              <br/>
              {voicing.order
                .map(index => selectedChord[index])
                .map(getNoteName)
                .join(' ')}
            </Selectable>
        )}
      </Grid>
      <Separator/>
    </>
  )
}