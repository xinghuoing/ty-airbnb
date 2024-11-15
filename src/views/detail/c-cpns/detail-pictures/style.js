import styled from "styled-components";

export const PicturesWrapper = styled.div`
  position: relative;

  .pictures {
    display: flex;
    height: 500px;

    /* 选中的不用打阴影背景，不选中的打 */
    &:hover {
      .cover {
        opacity: 1 !important;
      }
      .item:hover {
        .cover {
          opacity: 0 !important;
        }
      }
    }

    /* left right共同的样式 */
    .left,
    .right {
      width: 50%;
      height: 100%;

      .item {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 300ms ease;
        }
        &:hover {
          img {
            transform: scale(1.05);
          }
        }

        .cover {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: opacity 200ms ease;
        }
      }
    }

    /* right特殊处理 */
    .right {
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 50%;
        height: 50%;
        border: 1px solid #000;
        box-sizing: border-box;
      }
    }
  }

  .show-btn {
    position: absolute;
    z-index: 99;
    right: 30px;
    bottom: 24px;
    background: linear-gradient(45deg, #ff385c, #ff7a8a);
    font-weight: bold;
    color: white;
    padding: 8px 15px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
