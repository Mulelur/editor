import React from "react";
import { Container } from "./styles/editorSearch";

export default function EditorSearch({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
