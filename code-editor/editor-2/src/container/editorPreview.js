import React, { useContext } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { EditorPreview } from "../components";
import { EditorContextTree } from "../context/editorContext";

export default function EditorPreviewContainer() {
  const { state } = useContext(EditorContextTree);
  return (
    <EditorPreview preView={state.preView}>
      <EditorPreview.Header>
        <EditorPreview.Title>Preview</EditorPreview.Title>
      </EditorPreview.Header>
      <EditorPreview.Body>
        {state.activeFile.id && (
          <LiveProvider code={state.activeFile.value}>
            <LiveError />
            <LivePreview />
          </LiveProvider>
        )}
      </EditorPreview.Body>
    </EditorPreview>
  );
}
