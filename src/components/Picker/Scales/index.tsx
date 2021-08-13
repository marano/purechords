import Separator from '../../Separator'
import useSelectionContext from '../../useSelectionContext'
import ScaleIntervalsSelection from './ScaleSelection'
import SelectedScale from './SelectedScale'

export default function Scales() {
  const { selectedNote } = useSelectionContext()

  if (selectedNote === undefined) {
    return null
  }

  return (
    <>
      <ScaleIntervalsSelection />
      <Separator />
      <SelectedScale />
    </>
  )
}
