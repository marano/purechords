import { ReactNode } from 'react'
import styled from 'styled-components/macro'
import { Voicing } from '../types'
import areNumberArraysEquals from '../utils/areNumberArraysEquals'

const Pointer = styled.div`
  cursor: pointer;
`

type Comparable = string | number | number[] | Voicing

type Props<T extends Comparable> = {
  onSelect: (value?: T) => void
  children: ReactNode,
  value: T,
  selectedValue?: T,
}

export default function Selectable<T extends Comparable>({
  onSelect,
  value,
  selectedValue,
  children,
}: Props<T>) {
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
  if (valueA === undefined || valueB === undefined) {
    return false
  } else if (typeof valueA === 'number' && typeof valueB === 'number') {
    return valueA === valueB
  } else if (typeof valueA === 'string' && typeof valueB === 'string') {
    return valueA === valueB
  } else if (valueA instanceof Array && valueB instanceof Array) {
    return areNumberArraysEquals(valueA, valueB)
  } else if (isVoicing(valueA) && isVoicing(valueB)) {
    const voicingA = valueA as Voicing
    const voicingB = valueB as Voicing

    return areNumberArraysEquals(voicingA.order, voicingB.order)
      && areNumberArraysEquals(voicingA.stringJumps, voicingB.stringJumps)

  } else {
    return false
  }
}

function isVoicing<T extends Comparable>(value?: T): value is NonNullable<T> {
  return value !== undefined && 'order' in value && 'stringJumps' in value
}

