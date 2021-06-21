import React, { useState, useEffect } from "react";
import axios from "axios";
import EditorContainer from "./container/editor";
import "./index.css";

export default function App() {
  // const [state, setState] = useState([]);

  // useEffect(() => {
  //   axios.get(`http://127.0.0.1:8000/api/item/`).then((res) => {
  //     const data = res.data;
  //     setState([data]);
  //   });
  // }, []);

  // console.log(state);
  return <EditorContainer />;
}
