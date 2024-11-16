import styled from "styled-components";

export const TabsWrapper = styled.div`
  .title {
    display: flex;

    .item {
      padding: 7px 0;
      margin: 0 10px;
      cursor: pointer;
      font-weight: 600;
      color: ${(props) => (props.theme.isAlpha ? "#fff" : "#222")};

      &.active {
        border-bottom: ${(props) =>
          props.theme.isAlpha ? "2px solid #fff" : "2px solid #333"};
      }
    }
  }
`;
