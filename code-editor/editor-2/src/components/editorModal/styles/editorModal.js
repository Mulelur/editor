import styled from "styled-components/macro";

export const Container = styled.div`
  border-top: 1px solid #3d3636;
  background-color: #1e1e1e;
  height: 3.5rem;
  display: flex;
  position: relative;
  box-shadow-color-1: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h4`
  font-size: 1.3rem;
  color: #f4f9fe;
  font-weight: 500;
  margin-rigth: auto;
  position: absolute;
  top: 5px;
  overflow: hidden;
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
  // overflow-x: scroll;
  max-width: 50vw;
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
  padding-left: 0.3rem;
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
  padding-left: 0.3rem;
`;

export const PreviewTitle = styled.h4`
  font-size: 1.3rem;
  font-style: ${({ mode }) => (mode === "preview" ? "italic" : "normal")};
  font-weight: normal;
  color: #ffffff;
  margin-right: auto;
  padding-left: 1rem;
  max-width: 7.5rem;
  overflow: hidden;
`;

export const Delete = styled.div`
  padding: 3px;
  padding-right: 10px;
  display: flex;
  background-color: #302d2d;
  align-items: center;
  position: relative;
`;

export const IconWapper = styled.div`
  position: absolute;
  right: 7.3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #302d2d;
  width: 21px;
  height: 21px;
  transition: opacity 0.1s;
  opacity: ${({ mode }) => (mode === "saved" ? "0" : "1")};
  &:hover {
    opacity: 0;
  }
`;

export const Image = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-left: 0.4rem;
`;
