import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-icon {
      font-size: 24px;
    }
    .MuiPaginationItem-page {
      margin: 0 8px;
      &:hover {
        text-decoration: underline;
      }
    }
    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #fff;
    }
    .desc {
      margin: 14px 0;
    }
  }
`;
