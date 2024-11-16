import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  color: ${(props) =>
    props.theme.isAlpha ? "#fff" : props.theme.color.primaryColor};
  display: flex;
  
  .logo {
    padding: 24px;
    cursor: pointer;
  }
`;
