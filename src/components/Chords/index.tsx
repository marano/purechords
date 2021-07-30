import useSelectionContext from "../useSelectionContext";
import Grid from "../Grid";
import ChordNote from "./ChordNote";

export default function Chords() {
  const { selectedScaleNotes } = useSelectionContext()

  if (!selectedScaleNotes) {
    return null
  }

  return (
    <Grid columnCount={selectedScaleNotes.length}>
      {selectedScaleNotes.map((note, index) => <ChordNote key={`${index}-${note}`} note={note} />)}
    </Grid>
  )
}
