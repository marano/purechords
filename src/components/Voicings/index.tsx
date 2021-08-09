import chordVoicings from '../../constants/chordVoicings'
import getChord from '../../utils/getChord'
import getNoteName from '../../utils/getNoteName'
import getVoicedChord from '../../utils/getVoicedChord'
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
    selectedScaleDegree,
    selectedVoicing,
    setSelectedVoicing,
  } = useSelectionContext()

  if (
    selectedNote === undefined
    || selectedScale === undefined
    || selectedChordType === undefined
    || selectedScaleDegree === undefined
  ) {
    return null
  }

  const voicings = chordVoicings[selectedChordType]

  if (voicings.length === 0) {
    return null
  }

  const chord = getChord(
    selectedScale,
    selectedNote,
    selectedScaleDegree,
    selectedChordType
  )

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
              {getVoicedChord(chord, voicing)
                .map(getNoteName)
                .join(' ')}
            </Selectable>
        )}
      </Grid>
      <Separator/>
    </>
  )
}
