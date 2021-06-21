import React from "react";
import { Container } from "./styles/editorWorkBench";

export default function EditorWorkBench({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
