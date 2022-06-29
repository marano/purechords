import styled from 'styled-components/macro'
import useSelectionContext from '../useSelectionContext'
import useStudyContext from '../useStudyContext'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

export default function AddSelectionButton() {
  const selection = useSelectionContext()
  const { addSelection } = useStudyContext()

  return (
    <Container>
      <button onClick={onClick}>
        Hello TeSolva Team, thanks for your attention
      </button>
    </Container>
  )

  function onClick() {
    addSelection(selection)
  }
}
