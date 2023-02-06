import styled from "styled-components";
import { compose, layout } from "styled-system";

const TransparentLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-weight: inherit;
  border-bottom: none;
  margin: 0;
  padding: 0;
  ${compose(layout)}
`;

export default TransparentLink;
