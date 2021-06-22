import styled from "styled-components/macro";

export const Container = styled.div`
  width: calc(56vw - 241px);
  ${({ preView }) => !preView && "display: none;"}
`;

export const Header = styled.div`
  height: 3.5rem;
  border-top: 1px solid #3d3636;
  border-left: 1px solid #3d3636;
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
`;

export const Body = styled.div``;

export const Title = styled.span`
  font-size: 1.3rem;
  color: #fff;
  padding: 1rem;
`;
