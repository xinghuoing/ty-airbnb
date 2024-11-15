import styled from "styled-components";

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;
  .inner {
    position: relative;
    padding: 0 8px;
    cursor: pointer;
    .cover {
      width: 100%;
      border-radius: 3px;
    }

    .cover-bg {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 0;
      height: 60%;
      border-radius: 3px;
      background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 3%,
        rgb(0, 0, 0) 100%
      );
    }

    .info {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 24px 32px;
      color: #fff;
      .city {
        font-weight: 600;
        font-size: 18px;
      }
      .price {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
`;