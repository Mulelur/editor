import React from "react";
import { Container, Header, Body, Title } from "./styles/editorPreview";

export default function EditorPreview({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

EditorPreview.Header = function EditorPreviewHeader({
  children,
  ...restProps
}) {
  return <Header {...restProps}>{children}</Header>;
};

EditorPreview.Body = function EditorBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

EditorPreview.Title = function EditorTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
