import styled from "styled-components";

export const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    border-radius: 24px;
    padding: 0 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    cursor: pointer;
    ${(props) => props.theme.animation.boxShadow}

    .text {
      color: #222;
      font-weight: 600;
      padding: 0 16px;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      color: #fff;
      background-color: ${(props) => props.theme.color.primaryColor};
    }
  }

  .search-detail {
    position: relative;
    transform-origin: 50% 0;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translate(-50%);
    }
  }
`;
