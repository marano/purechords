import { chordIntervals } from "../../utils/constants";
import useSelectionContext from "../useSelectionContext";
import ChordOption from "./ChordOption";

export default function ChordSelection() {
  const { selectedChordNote } = useSelectionContext()

  if (selectedChordNote === undefined) {
    return null
  }

  return (
    <>
      {Object.entries(chordIntervals).map(
        ([chordName, intervals]) =>
          <ChordOption key={chordName} note={selectedChordNote} intervals={intervals} />
      )}
    </>
  )
}