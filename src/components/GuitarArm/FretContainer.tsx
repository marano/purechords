import styled from 'styled-components/macro'

type ContainerProps = {
  color: string
  isOpenString: boolean
}

export default styled.div`
  background-color: ${(props: ContainerProps) => props.color} !important;

  margin-left: ${(props: ContainerProps) => props.isOpenString ? -2 : 0}px;
  margin-top: ${(props: ContainerProps) => props.isOpenString ? -1 : 0}px;
  margin-bottom: ${(props: ContainerProps) => props.isOpenString ? -1 : 0}px;
  padding-bottom: ${(props: ContainerProps) => props.isOpenString ? 2 : 0}px;
`

