import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: ${(props) => props.itemwidth};
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 8px;
  margin: 8px 0;

  .inner {
    width: 100%;

  
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
        cursor: pointer;
      }
    }

    .desc {
      font-size: 12px;
      margin: 10px 0 5px;
      font-weight: 700;
    }

    .name {
      font-size: 16px;
      font-weight: 600;
      /* 只显示两行文字，其他省略 */
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      margin: 8px 0;
    }

    .bottom {
      display: flex;
      align-items: center;
      font-weight: 700;
      color: #18191e;
      .count {
        margin: 0 2px 0 4px;
        font-size: 12px;
      }

      .extra {
        font-size: 10px;
      }

      .MuiRating-icon {
        margin-right: -2px;
      }
    }
  }
`;