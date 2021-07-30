import { Note } from "../../types";
import { getNoteName } from "../../utils/notes";
import Selectable from "../Selectable";

type Props = {
  note: Note
}

export default function ChordNote({ note }: Props) {
  return (
    <Selectable onSelect={() => { }} isSelected={false}>
      {getNoteName(note)}
    </Selectable>
  )
}