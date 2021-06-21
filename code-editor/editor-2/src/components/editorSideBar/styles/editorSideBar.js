import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  width: 50px;
  height: calc(100vh - 60.9px);
  background-color: #1e1e1e;
  justify-content: center;
  border-top: 1px solid #3d3636;
  border-right: 1px solid #3d3636;
`;

export const Image = styled.img`
  height: 24px;
  width: 24px;
  display: block;
  margin-top: 6px;
`;

export const Frame = styled.div`
  margin-top: 10px;
`;

export const Title = styled.p`
  font-size: 16px;
`;

export const Inner = styled.div`
  padding: 7px 0;
`;
