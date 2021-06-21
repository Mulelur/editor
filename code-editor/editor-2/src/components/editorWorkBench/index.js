import React from "react";
import { Container, Status, StatusBar, Span } from "./styles/editorWorkBench";

export default function EditorWorkBench({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

EditorWorkBench.StatusBar = function EditorWorkBenchStatusBar({
  children,
  ...restProps
}) {
  return <StatusBar {...restProps}>{children}</StatusBar>;
};

EditorWorkBench.Status = function EditorWorkBenchStatus({
  children,
  ...restProps
}) {
  return <Status {...restProps}>{children}</Status>;
};

EditorWorkBench.Span = function EditorWorkSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
