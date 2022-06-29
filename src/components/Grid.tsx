import styled from 'styled-components/macro'

type Props = {
  columnCount: number
  borderless?: boolean
}

export default styled.div`
  display: grid;
  grid-template-columns: repeat(${(props: Props) => props.columnCount}, 1fr);
  justify-items: center;
  place-items: center;
  grid-gap: 2px;
  background-color: ${(props: Props) => props.borderless ? 'white' : 'black'};
  border: 3px ${(props: Props) => props.borderless ? 'white' : 'black'} solid;

  > div {
    align-self: stretch;
    justify-self: stretch;
    width: 100%;
    text-align: center;
    background-color: white;

    &.highlighted {
      background-color: black;
      color: white;
    }
  }
`
