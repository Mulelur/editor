import React from "react";
import { Container } from "./styles/editorSide";

export default function EditorSide({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
