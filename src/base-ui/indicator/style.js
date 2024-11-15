import styled from "styled-components";

export const IndecatorWrapper = styled.div`
  overflow: hidden;

  .i-content {
    position: relative;
    display: flex;
    transform: transition 200ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`;