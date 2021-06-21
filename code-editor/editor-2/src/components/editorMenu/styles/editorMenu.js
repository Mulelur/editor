import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  background-color: #1e1e1e;
`;

export const Title = styled.p`
  font-size: 1.4rem;
  padding: 0.8rem;
  color: #f4f3f3;
  &:hover {
    color: #81cdeb;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const ContextItem = styled.div`
  margin-right: auto;
`;
