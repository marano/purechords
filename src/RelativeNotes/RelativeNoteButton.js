import { equals } from 'ramda'
import { getNoteName, intervalsToNotes } from "../notes"
import useSelectionContext from "../useSelectionContext"
import Button from "../Button"

export default function RelativeNoteButton({ intervals }) {
  const {
    selectedNote,
    selectedIntervals,
    setSelectedIntervals
  } = useSelectionContext()

  const isSelected = equals(intervals, selectedIntervals)
  const notes = intervalsToNotes(intervals, selectedNote)

  return (
    <Button isSelected={isSelected} onClick={onClick}>
      {notes.map(note => getNoteName(note))}
    </Button>
  )

  function onClick() {
    setSelectedIntervals(intervals)
  }
}