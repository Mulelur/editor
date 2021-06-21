import React from "react";
import { Container, Title, Row, ContextItem } from "./styles/editorMenu";

export default function EditorMenu({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

EditorMenu.Title = function EditorMenuTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

EditorMenu.Row = function EditorMenuRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

EditorMenu.ContextItem = function EditorMenuTitle({ children, ...restProps }) {
  return <ContextItem {...restProps}>{children}</ContextItem>;
};
