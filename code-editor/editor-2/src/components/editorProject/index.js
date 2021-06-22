import React from "react";
import {
  Container,
  TreeHeader,
  Title,
  Image,
  TreeContent,
  TreeNode,
  TreeNodeInput,
  ToolBar,
  ToolBarIcon,
  Input,
  Form,
  SelectedTreeNodeText,
  TreeNodeTitle,
  Active,
} from "./styles/editorProject";

export default function EditorProject({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

EditorProject.TreeHeader = function EditorProjectTreeHeader({
  children,
  ...restProps
}) {
  return <TreeHeader {...restProps}>{children}</TreeHeader>;
};

EditorProject.Title = function EditorProjectTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

EditorProject.Image = function EditorProjectImage({ ...restProps }) {
  return <Image {...restProps} />;
};

EditorProject.TreeContent = function EditorProjectTreeContent({
  children,
  ...restProps
}) {
  return <TreeContent {...restProps}>{children}</TreeContent>;
};

EditorProject.TreeNode = function EditorProjectTreeNode({
  children,
  ...restProps
}) {
  return <TreeNode {...restProps}>{children}</TreeNode>;
};
EditorProject.TreeNodeInput = function EditorProjectTreeNodeInput({
  ...restProps
}) {
  return <TreeNodeInput {...restProps} />;
};

EditorProject.ToolBar = function EditorProjectToolBar({
  children,
  ...restProps
}) {
  return <ToolBar {...restProps}>{children}</ToolBar>;
};

EditorProject.ToolBarIcon = function EditorProjectToolBarIcon({
  children,
  ...restProps
}) {
  return <ToolBarIcon {...restProps}>{children}</ToolBarIcon>;
};

EditorProject.Input = function EditorProjectInput({ ...restProps }) {
  return <Input {...restProps} />;
};

EditorProject.Form = function EditorProjectForm({ children, ...restProps }) {
  return <Form {...restProps}> {children}</Form>;
};

EditorProject.SelectedTreeNodeText =
  function EditorProjectSelectedTreeNodeText({ children, ...restProps }) {
    return (
      <SelectedTreeNodeText {...restProps}>{children}</SelectedTreeNodeText>
    );
  };

EditorProject.TreeNodeTitle = function EditorProjectTreeNodeTitle({
  children,
  ...restProps
}) {
  return <TreeNodeTitle {...restProps}>{children}</TreeNodeTitle>;
};

EditorProject.Active = function EditorProjectActive({
  children,
  ...restProps
}) {
  return <Active {...restProps}>{children}</Active>;
};
