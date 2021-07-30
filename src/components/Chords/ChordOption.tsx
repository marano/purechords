import { Interval, Note } from "../../types";
import { getNoteName, intervalsToNotes } from "../../utils/notes";

type Props = {
  note: Note
  intervals: Interval[]
}

export default function ChordOption({ note, intervals }: Props) {
  return (
    <>
      {intervalsToNotes(intervals, note).map(getNoteName).join(' ')}
    </>
  )
}