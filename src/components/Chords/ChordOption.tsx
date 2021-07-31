import { Interval, Note } from "../../types";
import getNoteName from "../../utils/getNoteName";
import intervalsToNotes from "../../utils/intervalsToNotes";

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