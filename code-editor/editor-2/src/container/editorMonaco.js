import React, { useContext } from "react";
import { EditorMonaco } from "../components";
import Editor from "@monaco-editor/react";
import { EditorContextTree } from "../context/editorContext";
import { LogoIcon } from "../utils/icons/globalIcons";

export default function EditorMonacoContainer() {
  const { state, dispatch } = useContext(EditorContextTree);
  const {
    module = "index.js",
    language = "javascript",
    value = "// some comment here!!",
  } = state.activeFile;
  function handleEditorChange(value, event) {
    dispatch({
      type: "activeFile",
      payload: { type: "changeValue", value: value },
    });
    // console.log(value);
  }
  return (
    <EditorMonaco>
      {state.activeFile.id ? (
        <Editor
          width="calc(100vw - 250px)"
          height="calc(100vh - 96px)"
          theme="vs-dark"
          defaultLanguage={language}
          defaultValue={value}
          path={module}
          onChange={handleEditorChange}
        />
      ) : (
        <EditorMonaco.TempBG>
          <EditorMonaco.TempBGIconWapper>
            <LogoIcon />
          </EditorMonaco.TempBGIconWapper>
        </EditorMonaco.TempBG>
      )}
    </EditorMonaco>
  );
}
