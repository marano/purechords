import useSelectionContext from "../useSelectionContext";
import RelativeNoteButton from "./RelativeNoteButton";

export default function RelativeNotes() {
  const { selectedNote } = useSelectionContext()

  if (selectedNote !== 0 && !selectedNote) {
    return null
  }

  return (
    <RelativeNoteButton intervals={[3, 5, 7]} />
  )
}
