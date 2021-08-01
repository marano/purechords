import scaleIntervals from '../../constants/scaleIntervals'
import Grid from '../Grid'
import Selectable from '../Selectable'
import useSelectionContext from '../useSelectionContext'

export default function ScaleIntervalsSelection() {
  const {
    selectedScaleIntervals,
    setSelectedScaleIntervals,
  } = useSelectionContext()

  const scaleIntervalsEntries = Object.entries(scaleIntervals)

  return (
    <Grid columnCount={scaleIntervalsEntries.length}>
      {scaleIntervalsEntries.map(
        ([scaleName, intervals]) =>
          <Selectable
            key={scaleName}
            value={intervals}
            selectedValue={selectedScaleIntervals}
            onSelect={setSelectedScaleIntervals}
          >
            {scaleName}
          </Selectable>
      )}
    </Grid>
  )

}