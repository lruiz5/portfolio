import styled from "styled-components";
import {
  layout,
  alignContent,
  justifyContent,
  justifyItems,
  alignItems,
  position,
  flexDirection,
  grid,
  textAlign,
  padding,
  margin,
  color,
  borders,
  display,
  compose,
} from "styled-system";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${compose(
    position,
    alignContent,
    justifyContent,
    justifyItems,
    grid,
    layout,
    flexDirection,
    padding,
    borders,
    margin,
    textAlign,
    alignItems,
    color,
    display
  )};
`;

export default Container;
