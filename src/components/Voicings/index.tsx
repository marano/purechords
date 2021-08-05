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
              key={voicing.order.join('')}
              value={voicing}
              selectedValue={selectedVoicing}
              onSelect={setSelectedVoicing}
            >
              {voicing.order.join(' ')}
            </Selectable>
        )}
      </Grid>
      <Separator/>
    </>
  )
}