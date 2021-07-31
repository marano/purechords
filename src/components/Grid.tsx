import styled from 'styled-components/macro'

type Props = {
  columnCount: number
}

export default styled.div`
  display: grid;
  grid-template-columns: repeat(${(props: Props) => props.columnCount}, 1fr);
  justify-items: center;
  place-items: center;
  grid-gap: 1px;
  background-color: black;
  border: 1px black solid;

  > div {
    align-self: strech;
    justify-self: strech;
    width: 100%;
    text-align: center;
    background-color: white;

    &.highlighted {
      background-color: black;
      color: white;
    }
  }
`
