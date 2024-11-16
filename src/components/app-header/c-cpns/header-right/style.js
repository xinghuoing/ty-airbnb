import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor.primaryColor};

  .btns {
    display: flex;
    color: ${(props) =>
      props.theme.isAlpha ? "#fff" : props.theme.textColor.primaryColor};

    span {
      cursor: pointer;
      padding: 8px 13px;
      margin-right: 5px;
      border-radius: 20px;
      &:hover {
        background-color: ${(props) =>
          props.theme.isAlpha ? "rgba(255, 255, 255, .1)" : '#f5f5f5'};
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    width: 70px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 30px;
    margin-right: 40px;
    background-color: #fff;
    cursor: pointer;

    ${(props) => props.theme.animation.boxShadow};

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      color: #666;
      z-index: 9;
      /* border: 1px solid #eee; */

      .list {
        padding: 14px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      /* .top {
        border-bottom: 1px solid #ccc;
      } */
    }
  }
`;
