import React from "react";
import { Container, Image, Inner, Frame, Title } from "./styles/editorSideBar";

export default function EditorSideBar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

EditorSideBar.Image = function EditorSideBarImage({ ...restProps }) {
  return <Image {...restProps} />;
};

EditorSideBar.Frame = function EditorSideBarFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

EditorSideBar.Title = function EditorSideBarTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

EditorSideBar.Inner = function EditorSideBarInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};
