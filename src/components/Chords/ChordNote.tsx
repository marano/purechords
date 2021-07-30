import { Note } from "../../types";
import { getNoteName } from "../../utils/notes";
import Selectable from "../Selectable";
import useSelectionContext from "../useSelectionContext";

type Props = {
  note: Note
}

export default function ChordNote({ note }: Props) {
  const { selectedChordNote, setSelectedChordNote } = useSelectionContext()

  const isSelected = note === selectedChordNote

  return (
    <Selectable onSelect={onSelect} isSelected={isSelected}>
      {getNoteName(note)}
    </Selectable>
  )

  function onSelect() {
    setSelectedChordNote(note)
  }
}