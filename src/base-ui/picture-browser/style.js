import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #333;

  /* 垂直布局 */
  display: flex;
  flex-direction: column;

  .top {
    position: relative;
    height: 84px;

    .close-btn {
      position: absolute;
      z-index: 9;
      right: 30px;
      top: 20px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 84px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .img-list {
        margin-top: 6px;
        overflow: hidden;
        /* 给高度设置过渡动画 */
        transition: height 300ms ease;
        height: ${(props) => (props.showlist ? "65px" : "0")};

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
