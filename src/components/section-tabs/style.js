import styled from "styled-components";

export const TabsWrapper = styled.div`
`;

export const TabButton = styled.div`
  position: relative;
  /* z-index: 10; */
  box-sizing: border-box;
  /* flex设置项目最小宽度为90px */
  flex-basis: 120px;
  /* 当容器空间不足时，该项目不会缩小。 */
  flex-shrink: 0;
  padding: 8px 16px;
  margin-right: 16px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "#ffffff" : "#4b5563")};
  text-align: center;
  border: 0.5px solid #d8d8d8;
  white-space: nowrap;
  cursor: pointer;
  text-shadow: ${(props) =>
    props.isActive ? "0 1px 3px rgba(0, 0, 0, 0.3)" : "none"};

  transition: color 0.3s ease;
  ${(props) => props.theme.animation.boxShadow}

  &:hover {
    color: ${(props) => (props.isActive ? "#ffffff" : "#1f2937")};
  }
  &:last-child {
    margin-right: 0;
  }

  .bgc {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.color.secondaryColor};
    border-radius: 10px;
  }
`;