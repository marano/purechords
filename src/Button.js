import React from 'react'
import styled from "styled-components/macro"

const Container = styled.div`
  border: 1px black solid;
  cursor: pointer;
  display: inline-block;
  color: ${props => props.isSelected ? 'white' : 'black'};
  background-color: ${props => props.isSelected ? 'black' : 'white'};
`

export default function Button({ isSelected, onClick, children }) {
  return (
    <Container onClick={onClick} isSelected={isSelected}>
      {children}
    </Container>
  )
}