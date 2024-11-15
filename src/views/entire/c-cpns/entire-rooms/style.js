import styled from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 30px 20px;
  margin-top: 128px;

  .total {
    font-weight: 700;
    font-size: 22px;
    margin: 0 0 0 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  .bg-cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
