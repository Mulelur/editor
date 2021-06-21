import React from "react";
import { Container, Row, Col } from "./styles/editor";

export default function Editor({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Editor.Row = function EditroRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Editor.Col = function EditroRow({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};
