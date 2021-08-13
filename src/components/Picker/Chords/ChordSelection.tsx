import Grid from '../../Grid'
import Separator from '../../Separator'
import useSelectionContext from '../../useSelectionContext'
import ChordOption from './ChordOption'

export default function ChordSelection() {
  const {
    selectedNote,
    selectedScale,
    selectedChordType,
  } = useSelectionContext()

  if (
    selectedNote === undefined ||
    selectedScale === undefined ||
    selectedChordType === undefined
  ) {
    return null
  }

  return (
    <>
      <Grid columnCount={selectedScale.length - 1}>
        {selectedScale.slice(0, selectedScale.length - 1).map(
          (interval, scaleDegree) =>
            <ChordOption
              key={`${scaleDegree}-${interval}`}
              scaleKey={selectedNote}
              scale={selectedScale}
              scaleDegree={scaleDegree}
              chordType={selectedChordType}
            />
        )}
      </Grid>
      <Separator />
    </>
  )
}
