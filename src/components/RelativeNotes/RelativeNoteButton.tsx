import { equals } from 'ramda'
import { getNoteName, intervalsToNotes } from "../../utils/notes"
import useSelectionContext from "../useSelectionContext"
import Button from "../Button"

type Props = {
  intervals: number[]
}

export default function RelativeNoteButton({ intervals }: Props) {
  const {
    selectedNote,
    selectedIntervals,
    setSelectedIntervals
  } = useSelectionContext()

  const isSelected = equals(intervals, selectedIntervals)
  const notes = intervalsToNotes(intervals, selectedNote!)

  return (
    <Button isSelected={isSelected} onClick={onClick}>
      {notes.map(note => getNoteName(note)).join(' ')}
    </Button>
  )

  function onClick() {
    if (isSelected) {
      setSelectedIntervals(null)
    } else {
      setSelectedIntervals(intervals)
    }
  }
}