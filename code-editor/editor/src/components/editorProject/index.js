import React from "react";
import {
  Container,
  TreeHeader,
  Title,
  Image,
  TreeContent,
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
