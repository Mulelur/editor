import React from "react";
import { EditorMonaco } from "../components";
import Editor from "@monaco-editor/react";

export default function EditorMonacoContainer() {
  return (
    <EditorMonaco>
      <Editor
        width="calc(100vw - 250px)"
        height="calc(100vh - 61px)"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </EditorMonaco>
  );
}
