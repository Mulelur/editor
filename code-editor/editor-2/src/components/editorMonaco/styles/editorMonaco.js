import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: calc(100vw - 250px);
  height: calc(100vh - 96px);
  ${({ preView }) => preView && "width: calc(46vw - 35px);"}
  @media (max-width: 639px) {
    height: calc(100vh - 96px);
    width: calc(100vw - ${({ width }) => width}px);
  }
`;

export const TempBG = styled.div`
  // width: calc(100vw - 250px);
  height: 100%;
  background-color: #151313;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TempBGIconWapper = styled.div``;

export const Loading = styled.div``;

export const LoadingText = styled.h4``;
