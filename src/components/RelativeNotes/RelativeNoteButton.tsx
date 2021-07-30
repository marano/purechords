import { Interval } from "../../types"
import { getNoteName, intervalsToNotes } from "../../utils/notes"
import areNumberArraysEquals from '../../utils/areNumberArraysEquals'
import useSelectionContext from "../useSelectionContext"
import Button from "../Button"

type Props = {
  intervals: Interval[]
}

export default function RelativeNoteButton({ intervals }: Props) {
  const {
    selectedNote,
    selectedIntervals,
    setSelectedIntervals
  } = useSelectionContext()

  const isSelected = selectedIntervals
    ? areNumberArraysEquals(intervals, selectedIntervals)
    : false
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