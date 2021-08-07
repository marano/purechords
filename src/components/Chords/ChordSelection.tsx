import chordPositions from '../../constants/chordPositions'
import { ChordType, Interval, Scale } from '../../types'
import getScaleNotes from '../../utils/getScaleNotes'
import Grid from '../Grid'
import Separator from '../Separator'
import useSelectionContext from '../useSelectionContext'
import ChordOption from './ChordOption'

export default function ChordSelection() {
  const {
    selectedNote,
    selectedScale,
    selectedChordType,
  } = useSelectionContext()

  if (
    selectedNote === undefined ||
    selectedScale === undefined ||
    selectedChordType === undefined
  ) {
    return null
  }

  const scaleNotes = getScaleNotes(
    selectedScale,
    selectedNote
  )

  return (
    <>
      <Grid columnCount={scaleNotes.length}>
        {scaleNotes.map(
          (scaleNote, scaleNoteIndex) =>
            <ChordOption
              key={scaleNote}
              chordIndex={scaleNoteIndex}
              keyNote={scaleNote}
              chordType={selectedChordType}
              intervals={
                getChordIntervals(
                  selectedChordType,
                  selectedScale,
                  scaleNoteIndex
                )
              }
            />
        )}
      </Grid>
      <Separator />
    </>
  )
}

function getChordIntervals(
  chordType: ChordType,
  scale: Scale,
  scaleIndex: number
) {
  return chordPositions[chordType].map(
    chordPosition =>
      getScaleIntervalAtIndex(scale, scaleIndex + chordPosition)
       - getScaleIntervalAtIndex(scale, scaleIndex)
  )
}

function getScaleIntervalAtIndex(
  scaleIntervals: Interval[],
  index: number
) {
  const lastIndex = scaleIntervals.length - 1
  const rotations = Math.floor(index / lastIndex)
  const lastInterval = scaleIntervals[lastIndex]
  const rest = index - (lastIndex * rotations)

  return (rotations * lastInterval) + scaleIntervals[rest]
}