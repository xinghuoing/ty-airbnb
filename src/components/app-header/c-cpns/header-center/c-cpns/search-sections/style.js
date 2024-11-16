import styled from "styled-components";

export const SectionsWrapper = styled.div`
  .sections {
    width: 700px;
    height: 56px;
    display: flex;
    justify-content: center;


    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 25px;
      background-color: #fff;

      .item {
        margin: 12px 0;
        padding-left: 20px;
        padding-right: 110px;
        border-right: 1px solid #ccc;
        cursor: pointer;

        &:last-child {
          border-right: 0;
        }

        .title {
          font-size: 12px;
          color: #000;
        }
        .desc {
          font-size: 13px;
        }
      }
    }
  }
`;