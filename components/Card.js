import styled, { css } from "styled-components";
import { layout, space, compose } from "styled-system";

import Grid from "components/Grid";

const Card = styled(Grid)`
  background-color: #e8ebec00;
  padding: 30px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1rem;
  transition: 0.3s ease-in-out 0s;
  justify-content: start;
  ${({ selected }) =>
    selected &&
    css`
      box-shadow: rgb(232 235 248 / 90%) 0 0 60px;
    `}
  :hover {
    box-shadow: rgb(232 235 248 / 90%) 0 0 60px;
  }
  ${compose(layout, space)}
`;

export default Card;
