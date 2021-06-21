import styled from "styled-components/macro";

export const Container = styled.div`
  border-top: 1px solid #3d3636;
  background-color: #1e1e1e;
  height: 3.5rem;
  width: calc(100% - 50px);
  display: flex;
  position: relative;
  box-shadow-color-1: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3);
  max-width: 100%;
`;

export const Title = styled.h4`
  font-size: 1.3rem;
  color: #f4f9fe;
  font-weight: 500;
  margin-rigth: auto;
  position: absolute;
  top: 5px;
`;

export const Frame = styled.div`
  height: 3.4rem;
  width: 12.5rem;
  background-color: #302d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #3d3636;
  margin-right: auto;
`;
export const Active = styled.div`
  border-bottom: 1px solid #ffff";
`;

export const Inner = styled.div`
  display: flex;
`;

export const Actions = styled.div`
  height: 3.4rem;
  width: 9rem;
  border-left: 1px solid #3d3636;
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 1rem;
  top: 0;
  right: 0;
  position: absolute;
`;

export const FrameContainer = styled.div`
  position: relative;
  display: flex;
`;

export const FrameActive = styled.div`
  height: 3.4rem;
  width: 12.5rem;
  background-color: #302d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #3d3636;
  margin-right: auto;
  border-bottom: 1px solid #ffff;
`;

export const PreviewTitle = styled.h4`
  font-size: 1.3rem;
  font-style: italic;
  font-weight: normal;
  color: #ffffff;
`;

export const Delete = styled.div`
  position: absolute;
  right: 0;
  padding: 3px;
  padding-right: 10px;
  background-color: #302d2d;
`;
