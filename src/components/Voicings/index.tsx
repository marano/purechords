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

  return (
    <>
      <Grid columnCount={chordVoicings.length}>
        {chordVoicings.map(
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