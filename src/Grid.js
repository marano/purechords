import styled from 'styled-components/macro';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columnCount}, 1fr);
  justify-items: center;
  place-items: center;
  grid-gap: 0px;

  > div {
    align-self: strech;
    justify-self: strech;
    border: 1px solid black;
    width: 100%;
    text-align: center;

    &.highlighted {
      background-color: black;
      color: white;
    }
  }
`;
