import styled from "styled-components";

export const RswiperWrapper = styled.div`
  .swiper {
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }
    .overlay {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.5) 100%
      );
    }

    .control {
      position: absolute;
      z-index: 9;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: #fff;
      display: none;
      justify-content: space-between;

      .btn {
        display: flex;
        width: 64px;
        height: 100%;
        justify-content: center;
        align-items: center;
        /* 
        &.right {
          z-index: 1;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.1) 100%
          );
        } */
      }
    }
    .indicator {
      position: absolute;
      z-index: 9;
      left: 0;
      right: 0;
      bottom: 10px;
      width: 30%;
      margin: 0 auto;
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.29%;
        height: 20px;

        .dot {
          width: 5px;
          height: 5px;
          background-color: #fff;
          border-radius: 50%;
          opacity: 0.6;
        }
        .active {
          width: 7px;
          height: 7px;
          opacity: 1;
        }

        .subactive {
          width: 6px;
          height: 6px;
          opacity: 0.8;
        }
      }
    }

    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;

      img {
        position: absolute;
        border-radius: 3px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;