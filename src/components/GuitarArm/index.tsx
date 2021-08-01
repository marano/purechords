import { range } from 'fp-ts/ReadonlyNonEmptyArray'
import { Fret, Note } from '../../types'
import getFrets from '../../utils/getFrets'
import Grid from '../Grid'
import FretMark from './FretMark'
import GuitarArmProvider from './GuitarArmProvider'
import GuitarFret from './GuitarFret'

type Props = {
  strings: Note[]
  fretCount: number
}

export default function GuitarArm({ strings, fretCount }: Props) {
  const frets = getFrets(0, strings.length, 0, fretCount)

  return (
    <GuitarArmProvider strings={strings}>
      <Grid columnCount={fretCount}>
        {range(0, fretCount - 1).map(
          index =>
            <FretMark key={`${index}-mark`}>
              &nbsp;
              {[5, 7, 9].includes(index) ? '●' : ''}
              &nbsp;
            </FretMark>
        )}

        {frets.map(
          fret => <GuitarFret key={key(fret)} fret={fret} />
        )}
      </Grid>
    </GuitarArmProvider>
  )
}

function key(fret: Fret) {
  return `${fret[0]}-${fret[1]}`
}