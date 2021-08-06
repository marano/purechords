import chordVoicings from '../../constants/chordVoicings'
import getVoicingName from '../../utils/getVoicingName'
import Grid from '../Grid'
import Selectable from '../Selectable'
import Separator from '../Separator'
import useSelectionContext from '../useSelectionContext'

export default function Voicings() {
  const {
    selectedChordType,
    selectedChord,
    selectedVoicing,
    setSelectedVoicing,
  } = useSelectionContext()

  if (
    selectedChordType === undefined
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
            </Selectable>
        )}
      </Grid>
      <Separator/>
    </>
  )
}