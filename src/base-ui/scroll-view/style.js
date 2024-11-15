import styled from "styled-components";


export const ViewWrapper = styled.div`
  position: relative;
  .scroll {
    overflow: hidden;
    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }
  .control {
    position: absolute;
    z-index: 9;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    border-radius: 50%;
    background: #fff;
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`;