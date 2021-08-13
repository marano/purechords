import Guitar from '../Guitar'
import SelectionContext from '../SelectionContext'
import Separator from '../Separator'
import useStudyContext from '../useStudyContext'

export default function Study() {
  const { selections } = useStudyContext()

  return (
    <>
      {selections.map((selection, index) =>
        <SelectionContext.Provider key={index} value={selection}>
          <Separator />
          <Guitar />
        </SelectionContext.Provider>
      )}
    </>
  )
}
