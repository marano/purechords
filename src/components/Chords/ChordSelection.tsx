import { range } from 'fp-ts/ReadonlyNonEmptyArray'
import { ChordType, Note } from '../../types'
import getScaleNotes from '../../utils/getScaleNotes'
import rotateNumber from '../../utils/rotateNumber'
import Grid from '../Grid'
import Separator from '../Separator'
import useSelectionContext from '../useSelectionContext'
import ChordOption from './ChordOption'

export default function ChordSelection() {
  const {
    selectedScaleIntervals,
    selectedScale,
    selectedChordType,
  } = useSelectionContext()

  if (
    selectedScaleIntervals === undefined ||
    selectedScale === undefined ||
    selectedChordType === undefined
  ) {
    return null
  }

  const scaleNotes = getScaleNotes(selectedScale)
  const scaleNoteIndexes = range(0, scaleNotes.length - 1)

  return (
    <>
      <Grid columnCount={scaleNoteIndexes.length}>
        {scaleNoteIndexes.map(
          (scaleNoteIndex) =>
            <ChordOption
              key={scaleNoteIndex}
              chord={
                getChord(
                  selectedChordType,
                  scaleNotes,
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

function getChord(
  chordType: ChordType,
  scaleNotes: Note[],
  scaleNoteIndex: number
) {
  return chordType.map(
    chordInterval =>
      scaleNotes[
        rotateNumber(
          scaleNoteIndex + chordInterval,
          scaleNotes.length
        )
      ]
  )
}