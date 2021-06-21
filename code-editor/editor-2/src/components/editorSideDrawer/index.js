import React from "react";

import { Container, Inner } from "./styles/editorSideDrawer";

export default function EditorSideDrawer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

EditorSideDrawer.Inner = function EditorSideDrawerInner({
  children,
  ...restProps
}) {
  return <Inner {...restProps}>{children}</Inner>;
};
