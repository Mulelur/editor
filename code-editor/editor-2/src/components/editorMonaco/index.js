import React from "react";
import { Container } from "./styles/editorMonaco";

export default function EditorMonaco({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
