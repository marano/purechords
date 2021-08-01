import { ReactNode } from 'react'
import styled from 'styled-components/macro'
import areNumberArraysEquals from '../utils/areNumberArraysEquals'

const Pointer = styled.div`
  cursor: pointer;
`

type Comparable = number | number[]

type Props<T extends Comparable> = {
  onSelect: (value?: T) => void
  children: ReactNode,
  value: T,
  selectedValue?: T,
}

export default function Selectable<T extends Comparable>({ onSelect, value, selectedValue, children }: Props<T>) {
  const isSelected = isEqual(value, selectedValue)
  const className = isSelected ? 'highlighted' : undefined

  return (
    <Pointer className={className} onClick={onClick}>
      {children}
    </Pointer>
  )

  function onClick() {
    if (isSelected) {
      onSelect(undefined)
    } else {
      onSelect(value)
    }
  }
}

function isEqual<T extends Comparable>(valueA?: T, valueB?: T) {
  if (typeof valueA === 'number' && typeof valueB === 'number') {
    return valueA === valueB
  } else if (valueA instanceof Array && valueB instanceof Array) {
    return areNumberArraysEquals(valueA, valueB)
  } else {
    return false
  }
}
