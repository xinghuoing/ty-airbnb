import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  .info {
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 700;
    color: ${(props) => props.color};

    &:hover {
      text-decoration: underline;
    }
    .more {
      cursor: pointer;
      .text {
        margin-right: 6px;
      }
    }
    img {
      margin-left: 10px;
      width: 24px;
      height: 24px;
    }
  }
`;