import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;
  font-size: 14px;

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 19;
    background-color: #fff;
    
    .top {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
    }

    .search-area {
      height: 100px;
    }
  }

  .cover {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .3);
    cursor: pointer;
  }
`;

export const SearchWrapper = styled.div`
  z-index: 999;
  transition: height 250ms ease;
  height: ${(props) => (props.issearch ? "100px" : "0")};
`;