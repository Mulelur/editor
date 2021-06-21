import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: rgb(36, 36, 36);
  color: rgb(255, 255, 255);
  position: fixed;
  display: flex;
  bottom: 0px;
  right: 0px;
  left: 0px;
  width: 100%;
  height: 22.9px;
  align-items: center;
  padding: 0 1rem;
`;

export const StatusBar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Status = styled.span`
  font-size: 1.2rem;
  padding: 1rem;
`;

export const Span = styled.span`
  font-size: 1.2rem;
`;
