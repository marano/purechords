import styled from 'styled-components/macro'
import useSelectionContext from './useSelectionContext'
import useStudyContext from './useStudyContext'

const Container = styled.div`
  display: flex;
`

export default function AddSelectionButton() {
  const { selection } = useSelectionContext()
  const { addSelection } = useStudyContext()

  return (
    <Container>
      <button onClick={onClick}>
        Add selection to study
      </button>
    </Container>
  )

  function onClick() {
    addSelection(selection)
  }
}
