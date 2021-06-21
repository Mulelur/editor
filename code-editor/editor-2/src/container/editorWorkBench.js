import React, { useContext } from "react";
import { EditorWorkBench } from "../components";
import { EditorContextTree } from "../context/editorContext";

export default function EditorWorkBenchContainer() {
  const { state, dispatch } = useContext(EditorContextTree);
  return (
    <EditorWorkBench>
      <EditorWorkBench.Span>Tondi</EditorWorkBench.Span>
      <EditorWorkBench.StatusBar>
        {state.workBench.map((item) => {
          return <EditorWorkBench.Status>{item.value}</EditorWorkBench.Status>;
        })}
        <EditorWorkBench.Status>
          {state.activeFile.language}
        </EditorWorkBench.Status>
      </EditorWorkBench.StatusBar>
    </EditorWorkBench>
  );
}
