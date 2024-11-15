import styled from "styled-components";

export const TabsWrapper = styled.div`
  /* height: 80px; */
  .title {
    display: flex;
    /* text-align: center;
    justify-content: center; */

    .item {
      padding: 7px 0;
      margin: 0 10px;
      cursor: pointer;
      font-weight: 600;
      color: #000;
      opacity: 0.8;

      &.active {
        border-bottom: 2px solid #000;
      }
    }
  }
`;
