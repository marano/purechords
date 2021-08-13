import { range } from 'fp-ts/ReadonlyNonEmptyArray'
import { Fret } from '../../types'
import getFrets from '../../utils/getFrets'
import toRoman from '../../utils/toRoman'
import Grid from '../Grid'
import useSettingsContext from '../useSettingsContext'
import FretMark from './FretMark'
import GuitarProvider from './GuitarProvider'
import GuitarFret from './GuitarFret'

export default function Guitar() {
  const { strings, fretCount } = useSettingsContext()

  const frets = getFrets(0, strings.length, 0, fretCount)

  return (
    <GuitarProvider>
      <Grid columnCount={fretCount}>
        <FretMark>&nbsp;</FretMark>
        {range(1, fretCount - 1).map(
          index =>
            <FretMark key={`${index}-mark`}>
              {toRoman(index)}
            </FretMark>
        )}

        {frets.map(
          fret => <GuitarFret key={key(fret)} fret={fret} />
        )}
      </Grid>
    </GuitarProvider>
  )
}

function key(fret: Fret) {
  return `${fret[0]}-${fret[1]}`
}
