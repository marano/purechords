import { ChordType } from '../../../types'
import Grid from '../../Grid'
import Selectable from '../../Selectable'
import useSelectionContext from '../../useSelectionContext'
import usePickerContext from '../usePickerContext'

export default function ChordTypeSelection() {
  const { selectedChordType } = useSelectionContext()
  const { setSelectedChordType } = usePickerContext()

  const chordTypes = Object.values(ChordType)

  return (
    <Grid columnCount={chordTypes.length}>
      {chordTypes.map(
        chordType =>
          <Selectable
            key={chordType}
            value={chordType}
            selectedValue={selectedChordType}
            onSelect={setSelectedChordType}
          >
            {chordType}
          </Selectable>
      )}
    </Grid>
  )
}
