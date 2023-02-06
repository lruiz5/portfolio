import styled from "styled-components";
import {
  fontSize,
  fontWeight,
  color,
  textAlign,
  margin,
  compose,
} from "styled-system";

const Title = styled.h1`
  margin: 10px 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  font-weight: bold;
  ${compose(fontSize, fontWeight, color, textAlign, margin)}
`;

export default Title;
