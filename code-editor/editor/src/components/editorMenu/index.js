import React from "react";
import { Container, Title } from "./styles/editorMenu";

export default function EditorMenu({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

EditorMenu.Title = function EditorMenuTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
