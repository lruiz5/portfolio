import React from "react";
import styled, { css } from "styled-components";
import {
  gridGap,
  space,
  grid,
  layout,
  flexbox,
  borders,
  compose,
} from "styled-system";

const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-content: flex-end;
  grid-template-columns:
    ${({ children }) =>
      children &&
      css`repeat(${React.Children.toArray(children).length}, auto);`}
    ${compose(gridGap, grid, space, layout, flexbox, borders)};
`;

Grid.defaultProps = {};

export default Grid;
