import { ReactNode } from 'react'
import styled from 'styled-components/macro'

const Pointer = styled.div`
  cursor: pointer;
`

type Props = {
  isSelected: boolean
  onSelect: () => void
  children: ReactNode
}

export default function Selectable({ isSelected, onSelect, children }: Props) {
  return (
    <Pointer className={isSelected ? 'highlighted' : undefined} onClick={onSelect}>
      {children}
    </Pointer>
  )
}
