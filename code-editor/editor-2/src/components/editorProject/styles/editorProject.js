import styled from "styled-components/macro";

export const Container = styled.div``;

export const TreeHeader = styled.div`
  height: 21px;
  border-bottom: 1px solid #3d3636;
  border-top: 1px solid #3d3636;
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const Title = styled.h4`
  font-weight: 470;
`;

export const Text = styled.p``;

export const Image = styled.img``;

export const TreeContent = styled.div`
  margin: 0px 5px;
`;

export const TreeNode = styled.div`
  display: flex;
  align-items: center;
`;

export const TreeNodeTitle = styled.p`
  padding-left: 3px;
  margin-right: auto;
`;

export const TreeNodeText = styled.button`
  padding-left: 3px;
  background-color: transparent;
  border: none;
  color: #cccccc;
  width: 100%;
  text-align: start;
  outline: none;
  margin: 0.25rem 0;

  &:hover {
    color: #f9f7f7;
  }

  // &:focus {
  //   background-color: #2e2644;
  // }
`;

export const ToolBar = styled.div`
  display: flex;
  padding: 0.5rem;
`;

export const ToolBarIcon = styled.span`
  // border: none;
  // background-color: transparent;
`;

export const Input = styled.input`
  background-color: #494242;
  width: 100%;
  border: none;
  height: 2rem;
  margin: 0.5rem 0;
  border-radius: 2px;
  outline: none;
  padding-left: 0.3rem;
  color: #ffff;
`;

export const Form = styled.form``;

export const SelectedTreeNodeText = styled.div`
  color: red;
`;

export const Active = styled.p`
  color: #ffff;
`;