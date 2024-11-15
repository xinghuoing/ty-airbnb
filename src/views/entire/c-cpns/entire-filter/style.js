import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: #fff;

  .filter {
    display: flex;
    margin-left: 20px;

    .item {
      padding: 6px 10px;
      border: 0.5px solid #ccc;
      border-radius: 3px;
      margin: 6px;
      font-size: 13px;
      cursor: pointer;

      &.active {
        background-color: ${(props) => props.theme.color.secondaryColor};
        color: #fff;
      }
    }
  }
`;