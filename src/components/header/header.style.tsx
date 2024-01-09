import styled, { css } from "styled-components";

export const HeaderContainer = styled.View`
  height: 120px;
  width: 100%;
  padding: 8px;
  flex-direction: "row";
  align-items: flex-start;
  align-content: space-between;
  justify-content: space-between;
  margin-top: 32px;
`;

export const LineSeparator = styled.View`
  height: 4px;
  width: 100%;
  ${css`box-shadow: 0px 4px 8px #71768e3d;`};
  background-color: #DDD;
  margin-bottom: 2px;
`;
