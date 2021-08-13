import scaleIntervals from '../../../constants/scaleIntervals'
import Grid from '../../Grid'
import Selectable from '../../Selectable'
import useSelectionContext from '../../useSelectionContext'
import usePickerContext from '../usePickerContext'

export default function ScaleIntervalsSelection() {
  const { selectedScale } = useSelectionContext()
  const { setSelectedScale }= usePickerContext()

  const scaleIntervalsEntries = Object.entries(scaleIntervals)

  return (
    <Grid columnCount={scaleIntervalsEntries.length}>
      {scaleIntervalsEntries.map(
        ([scaleName, intervals]) =>
          <Selectable
            key={scaleName}
            value={intervals}
            selectedValue={selectedScale}
            onSelect={setSelectedScale}
          >
            {scaleName}
          </Selectable>
      )}
    </Grid>
  )
}
