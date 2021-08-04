import chordVoicings from '../../constants/chordVoicings'
import Grid from '../Grid'
import Selectable from '../Selectable'
import Separator from '../Separator'
import useSelectionContext from '../useSelectionContext'

export default function Voicings() {
  const { selectedVoicing, setSelectedVoicing } = useSelectionContext()

  return (
    <>
      <Grid columnCount={chordVoicings.length}>
        {chordVoicings.map(
          voicing =>
            <Selectable
              key={voicing.join('')}
              value={voicing}
              selectedValue={selectedVoicing}
              onSelect={setSelectedVoicing}
            >
              {voicing.join(' ')}
            </Selectable>
        )}
      </Grid>
      <Separator/>
    </>
  )
}