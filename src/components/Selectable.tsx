import { ReactNode } from 'react'
import styled from 'styled-components/macro'
import { Scale } from '../types'
import areNumberArraysEquals from '../utils/areNumberArraysEquals'

const Pointer = styled.div`
  cursor: pointer;
`

type Comparable = number | number[] | Scale

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
  } else if (isScale(valueA) && isScale(valueB)) {
    const scaleA = valueA as Scale
    const scaleB = valueB as Scale

    return scaleA.key === scaleB.key && areNumberArraysEquals(scaleA.intervals, scaleB.intervals)
  } else {
    return false
  }
}

function isScale<T extends Comparable>(value?: T): value is NonNullable<T> {
  return value !== undefined && 'key' in value && 'intervals' in value
}
