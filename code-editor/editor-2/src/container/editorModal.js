import React, { useContext } from "react";
import { EditorModal } from "../components";
import { EditorContextTree } from "../context/editorContext";
import {
  ClearIcon,
  DotIcon,
  EditorkeyboardControl,
  EditorSplitWindowIcon,
  PreviewIcon,
} from "../utils/icons/editorProjectIcons";

export default function EditorModalContainer() {
  const { state, dispatch } = useContext(EditorContextTree);
  return (
    <EditorModal>
      <EditorModal.Inner>
        <EditorModal.FrameContainer>
          {state.selectedArry.map((item, index) => {
            return (
              <>
                {state.activeFile.id === item.id ? (
                  <EditorModal.FrameActive>
                    <EditorModal.Image src={item.icon} />
                    <EditorModal.PreviewTitle mode={state.activeFile.mode}>
                      {item.module}
                    </EditorModal.PreviewTitle>
                    <EditorModal.Delete
                      onClick={() => {
                        dispatch({
                          type: "modalActions",
                          payload: { type: "delete", value: index },
                        });
                      }}
                    >
                      <ClearIcon width="16" height="16" fill="#ccc" />
                      <EditorModal.IconWapper mode={state.activeFile.mode}>
                        <DotIcon />
                      </EditorModal.IconWapper>
                    </EditorModal.Delete>
                  </EditorModal.FrameActive>
                ) : (
                  <EditorModal.Frame
                    onClick={() => {
                      dispatch({
                        type: "modalActions",
                        payload: {
                          value: item,
                          mode: state.activeFile.mode,
                          type: "setActive",
                        },
                      });
                    }}
                  >
                    <EditorModal.Image src={item.icon} />
                    <EditorModal.PreviewTitle>
                      {item.module}
                    </EditorModal.PreviewTitle>
                    <EditorModal.Delete
                      onClick={() => {
                        dispatch({
                          type: "modalActions",
                          payload: { type: "delete", value: index },
                        });
                      }}
                    >
                      <ClearIcon width="16" height="16" fill="#fff" />
                    </EditorModal.Delete>
                  </EditorModal.Frame>
                )}
              </>
            );
          })}
        </EditorModal.FrameContainer>
        <EditorModal.Actions>
          <EditorSplitWindowIcon />
          <PreviewIcon
            onClick={() => {
              dispatch({
                type: "toggel",
                payload: {
                  type: "preView",
                  prevState: state.preView,
                },
              });
            }}
          />
          <EditorkeyboardControl />
        </EditorModal.Actions>
      </EditorModal.Inner>
    </EditorModal>
  );
}
