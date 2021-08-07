import { ChordType } from '../../types'
import Grid from '../Grid'
import Selectable from '../Selectable'
import useSelectionContext from '../useSelectionContext'

export default function ChordTypeSelection() {
  const { selectedChordType, setSelectedChordType } = useSelectionContext()

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