import React from "react";
import {
  Container,
  Title,
  Frame,
  Inner,
  Actions,
  FrameContainer,
  Active,
  FrameActive,
  PreviewTitle,
  Delete,
  IconWapper,
  Image,
} from "./styles/editorModal";

export default function EditorModal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
EditorModal.Frame = function EditorModalFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

EditorModal.Title = function EditorModalTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

EditorModal.Inner = function EditorModalInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

EditorModal.Actions = function EditorModalActions({ children, ...restProps }) {
  return <Actions {...restProps}>{children}</Actions>;
};

EditorModal.FrameContainer = function EditorModalFrameContainer({
  children,
  ...restProps
}) {
  return <FrameContainer {...restProps}>{children}</FrameContainer>;
};

EditorModal.Active = function EditorModalActive({ ...restProps }) {
  return <Active {...restProps} />;
};

EditorModal.FrameActive = function EditorModalFrameActive({
  children,
  ...restProps
}) {
  return <FrameActive {...restProps}>{children}</FrameActive>;
};

EditorModal.PreviewTitle = function EditorModalPreviewTitle({
  children,
  ...restProps
}) {
  return <PreviewTitle {...restProps}>{children}</PreviewTitle>;
};

EditorModal.Delete = function EditorModalDelete({ children, ...restProps }) {
  return <Delete {...restProps}>{children}</Delete>;
};

EditorModal.IconWapper = function EditorModalIconWapper({
  children,
  ...restProps
}) {
  return <IconWapper {...restProps}>{children}</IconWapper>;
};

EditorModal.Image = function EditorModalImage({ ...restProps }) {
  return <Image {...restProps} />;
};
