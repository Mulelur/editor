import React from "react";
import { Container, TempBG, TempBGIconWapper } from "./styles/editorMonaco";

export default function EditorMonaco({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

EditorMonaco.TempBG = function EditorMonacoTempBG({ children, ...restProps }) {
  return <TempBG {...restProps}>{children}</TempBG>;
};

EditorMonaco.TempBGIconWapper = function EditorMonacoTempBGIconWapper({
  children,
  ...restProps
}) {
  return <TempBGIconWapper {...restProps}>{children}</TempBGIconWapper>;
};
