import { getNoteName, rotateNoteIndex } from "./notes";
import useSelectionContext from "./useSelectionContext";

export default function RelativeNotes() {
    const { selectedNote } = useSelectionContext()

    if (selectedNote !== 0 && !selectedNote) {
        return null
    }

    return (
      <>
        {getNoteName(rotateNoteIndex(selectedNote))}
        {getNoteName(rotateNoteIndex(selectedNote + 3))}
        {getNoteName(rotateNoteIndex(selectedNote + 5))}
        {getNoteName(rotateNoteIndex(selectedNote + 7))}
      </>
    )
}