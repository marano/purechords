import styled from 'styled-components/macro'

type CircleProps = {
  isHighlighted: boolean
}

export default styled.span`
  background-color: ${(props: CircleProps) => props.isHighlighted ? 'black' : 'transparent'};
  border-radius: 100%;
  color: ${(props: CircleProps) => props.isHighlighted ? 'white' : 'black'};
  padding-left: 4px;
  padding-right: 4px;
`

