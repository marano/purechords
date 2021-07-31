import { Interval } from '../../types'
import areNumberArraysEquals from '../../utils/areNumberArraysEquals'
import relativeIntervalsToNotes from '../../utils/relativeIntervalsToNotes'
import getNoteName from '../../utils/getNoteName'
import useSelectionContext from '../useSelectionContext'
import Button from '../Button'

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

  const notes = relativeIntervalsToNotes(intervals, selectedNote!)

  return (
    <Button isSelected={isSelected} onClick={onClick}>
      {notes.map(getNoteName).join(' ')}
    </Button>
  )

  function onClick() {
    if (isSelected) {
      setSelectedIntervals(undefined)
    } else {
      setSelectedIntervals(intervals)
    }
  }
}
