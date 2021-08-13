import SelectionContext from '../SelectionContext'
import useStudyContext from '../useStudyContext'

export default function Study() {
  const { selections } = useStudyContext()

  return (
    <>
      {selections.map((selection) =>
        null
      )}
    </>
  )
}
