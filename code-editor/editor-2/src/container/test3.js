import React, { useContext, useState } from "react";
import Tree from "react-ui-tree";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { EditorProject } from "../components";
import {
  EditorAddFileIcon,
  EditorAddFolderIcon,
} from "../utils/icons/editorProjectIcons";
import { ContextMenuTrigger } from "react-contextmenu";
import { EditorContextTree } from "../context/editorContext";
import _ from "lodash";
import deepdash from "deepdash";

deepdash(_);

function collect(props) {
  return props;
}

export default function EditorProjectContainer() {
  const { state, dispatch } = useContext(EditorContextTree);

  function handleChange(tree) {
    dispatch({ type: "changeTree", payload: tree });
  }

  function handelClick(node) {
    if (node.leaf) {
      const n = _.findDeep(state.tree, (item) => item.id === node.id, {
        childrenPath: "children",
      });
      dispatch({ type: "select", payload: n.parent });
      var ac = state.activeFile;
      ac.file = node;
      ac.modue = "preview";

      if (state.selectedArry.includes(state.activeFile.file)) {
        dispatch({
          type: "setActiveFile",
          payload: {
            file: node,
            modue: "preview",
          },
        });
      }
    }
  }
  const renderNode = (node) => {
    function handelSelected() {
      if (state.selected.id === undefined) {
        dispatch({ type: "select", payload: node });
      }
    }

    function handleSubmit(e, itemType) {
      e.preventDefault();
      itemType === "file"
        ? dispatch({
            type: "addItem",
            payload: {
              type: "file",
              title: state.inputValue,
              node: node,
            },
          })
        : dispatch({
            type: "addItem",
            payload: {
              type: "folder",
              title: state.inputValue,
              node: node,
            },
          });
    }
    console.log();
    const isFolder = node.hasOwnProperty("children");

    const renderFileFolderToolbar = (isFolder, caption, id) => {
      return (
        <>
          <EditorProject.TreeNode>
            {isFolder ? (
              node.collapsed ? (
                <FolderIcon
                  onClick={() => {
                    dispatch({
                      type: "toggel",
                      payload: {
                        type: "nodefolderCollapesd",
                        value: node,
                        preState: state.nodefolderCollapsed,
                      },
                    });
                  }}
                />
              ) : (
                <FolderOpenIcon
                  onClick={() => {
                    dispatch({
                      type: "toggel",
                      payload: {
                        type: "nodefolderCollapesd",
                        value: node,
                        preState: state.nodefolderCollapsed,
                      },
                    });
                  }}
                />
              )
            ) : (
              <InsertDriveFileIcon />
            )}
            {id !== "react-ui-tree" ? (
              <EditorProject.TreeNodeText
                onClick={() => {
                  // handelClick(node);
                  if (isFolder) {
                    dispatch({ type: "select", payload: node });
                  }
                }}
              >
                {caption}
              </EditorProject.TreeNodeText>
            ) : (
              <EditorProject.TreeNodeTitle
                onClick={() => {
                  dispatch({ type: "select", payload: node });
                }}
              >
                {caption}
              </EditorProject.TreeNodeTitle>
            )}
            {isFolder && id === "react-ui-tree" && (
              <EditorProject.ToolBar>
                <EditorProject.ToolBarIcon
                  onClick={() => {
                    console.log("Addfile icon clicked");
                    // handelAddFile("file");
                    dispatch({ type: "showInput", payload: state.showInput });
                  }}
                >
                  <EditorAddFileIcon />
                </EditorProject.ToolBarIcon>
                <EditorProject.ToolBarIcon
                  onClick={() => {
                    // handelAddFile("folder");
                    dispatch({ type: "showInput", payload: state.showInput });
                  }}
                >
                  <EditorAddFolderIcon />
                </EditorProject.ToolBarIcon>
              </EditorProject.ToolBar>
            )}
          </EditorProject.TreeNode>
          <EditorProject.TreeNode>
            {state.showInput && node.id === state.selected.id && (
              <EditorProject.Form onSubmit={(e) => handleSubmit(e)}>
                <EditorProject.Input
                  autoFocus
                  onChange={(e) => {
                    dispatch({
                      type: "inputonChange",
                      payload: { value: e.target.value },
                    });
                  }}
                  type="text"
                  value={state.inputValue}
                />
              </EditorProject.Form>
            )}
          </EditorProject.TreeNode>
        </>
      );
    };
    return (
      <ContextMenuTrigger
        id="FILE_CONTEXT_MENU"
        key={node.id}
        name={node.id}
        collect={collect}
        holdToDisplay={-1}
        // onItemClick={handleContextClick}
      >
        {renderFileFolderToolbar(isFolder, node.module, node.id)}
      </ContextMenuTrigger>
    );
  };

  return (
    <EditorProject>
      <EditorProject.TreeHeader>
        <EditorProject.Title>File</EditorProject.Title>
      </EditorProject.TreeHeader>
      <EditorProject.TreeContent>
        <Tree
          draggable
          paddingLeft={10}
          tree={state.tree}
          // onChange={handleChange}
          renderNode={renderNode}
        />
      </EditorProject.TreeContent>
    </EditorProject>
  );
}
