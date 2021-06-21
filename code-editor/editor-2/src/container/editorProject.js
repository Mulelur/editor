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

  const renderNode = (node) => {
    function handleSubmit(e) {
      e.preventDefault();
      dispatch({
        type: "addItem",
        payload: {
          type: state.sender,
          title: state.showInput.value,
          tree: state.tree,
          active: state.selected,
          node: node,
        },
      });
    }
    console.log(state.tree);
    console.log(state.selected);
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
                    dispatch({
                      type: "showInput",
                      payload: {
                        type: "toggle",
                        prevState: state.showInput.state,
                      },
                    });
                    dispatch({
                      type: "setSender",
                      payload: { type: "addItem", value: "file" },
                    });
                  }}
                >
                  <EditorAddFileIcon />
                </EditorProject.ToolBarIcon>
                <EditorProject.ToolBarIcon
                  onClick={() => {
                    dispatch({
                      type: "showInput",
                      payload: {
                        type: "toggle",
                        prevState: state.showInput.state,
                      },
                    });
                    dispatch({
                      type: "setSender",
                      payload: { type: "addItem", value: "folder" },
                    });
                  }}
                >
                  <EditorAddFolderIcon />
                </EditorProject.ToolBarIcon>
              </EditorProject.ToolBar>
            )}
          </EditorProject.TreeNode>
          <EditorProject.TreeNode>
            {state.showInput.state && node.id === state.selected.id && (
              <EditorProject.Form onSubmit={(e) => handleSubmit(e)}>
                <EditorProject.Input
                  autoFocus
                  onChange={(e) => {
                    dispatch({
                      type: "showInput",
                      payload: { type: "changeValue", value: e.target.value },
                    });
                  }}
                  type="text"
                  value={state.showInput.value}
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
          onChange={handleChange}
          renderNode={renderNode}
        />
      </EditorProject.TreeContent>
    </EditorProject>
  );
}
