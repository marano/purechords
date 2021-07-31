import { ReactNode } from 'react'
import styled from 'styled-components/macro'

type ContainerProps = {
  isSelected: boolean
}

const Container = styled.div`
  border: 1px black solid;
  cursor: pointer;
  display: inline-block;
  color: ${(props: ContainerProps) => props.isSelected ? 'white' : 'black'};
  background-color: ${(props: ContainerProps) => props.isSelected ? 'black' : 'white'};
  padding: 5px;
`

type Props = {
  isSelected: boolean
  onClick: () => void
  children: ReactNode
}

export default function Button({ isSelected, onClick, children }: Props) {
  return (
    <Container onClick={onClick} isSelected={isSelected}>
      {children}
    </Container>
  )
}