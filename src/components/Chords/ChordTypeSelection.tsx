import chordTypes from '../../constants/chordTypes'
import Grid from '../Grid'
import Selectable from '../Selectable'
import useSelectionContext from '../useSelectionContext'

export default function ChordTypeSelection() {
  const { selectedChordType, setSelectedChordType } = useSelectionContext()

  return (
    <Grid columnCount={Object.values(chordTypes).length}>
      {Object.entries(chordTypes).map(
        ([chordType, intervals]) =>
          <Selectable
            key={chordType}
            value={intervals}
            selectedValue={selectedChordType}
            onSelect={setSelectedChordType}
          >
            {chordType}
          </Selectable>
      )}
    </Grid>
  )
}