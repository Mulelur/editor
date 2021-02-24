import React from "react";
import { Container } from "./styles/editorSideBar";

export default function EditorSideBar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
