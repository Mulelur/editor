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
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import { EditorContextTree } from "../context/editorContext";
import _ from "lodash";
import deepdash from "deepdash";
import { KeyboardArrowDown } from "@material-ui/icons";

deepdash(_);
function deleteFromTree(o, id) {
  function getNode(a, i) {
    if (a.id === id) {
      index = i;
      return true;
    }
    if (Array.isArray(a.children) && a.children.some(getNode)) {
      if (~index) {
        a.children.splice(index, 1);
        index = -1;
      }
      return true;
    }
  }

  var index = -1;
  [o].some(getNode);
}

function collect(props) {
  return props;
}

export default function EditorProjectContainer() {
  const { state, dispatch } = useContext(EditorContextTree);
  const handleContextClick = (e, { action, name: id }) => {
    switch (action) {
      case "rename":
        dispatch({
          type: "toggel",
          payload: {
            type: "treeNodeInput",
            value: state.treeNodeInput.disabled,
            id: id,
          },
        });
        break;
      case "delete":
        // deleteFromTree(state, id);
        dispatch({
          type: "contextClick",
          payload: { type: "delete", id: id, state: state },
        });
        break;
      default:
    }
  };

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
    const isFolder = node.hasOwnProperty("children");

    const renderFileFolderToolbar = (isFolder, caption, id, icon) => {
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
              <EditorProject.Image src={icon} />
            )}
            {id !== "react-ui-tree" ? (
              <EditorProject.Form
                onClick={(e) => {
                  if (isFolder) {
                    dispatch({ type: "select", payload: node });
                  } else {
                    dispatch({
                      type: "modalActions",
                      payload: { type: "addItem", value: node },
                    });
                    dispatch({ type: "setActiveFile", payload: node });
                  }
                }}
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch({
                    type: "toggel",
                    payload: {
                      type: "treeNodeInput",
                      value: state.treeNodeInput.disabled,
                      id: id,
                    },
                  });
                }}
              >
                {state.treeNodeInput.id === node.id ? (
                  <EditorProject.TreeNodeInput
                    treeNodeInput={state.treeNodeInput.disabled}
                    id={node.id}
                    value={caption}
                    disabled={state.treeNodeInput.disabled}
                    autoFocus
                    autocomplete="off"
                    onChange={(e) => {
                      dispatch({
                        type: "contextClick",
                        payload: {
                          type: "rename",
                          id: id,
                          value: e.target.value,
                        },
                      });
                    }}
                  />
                ) : (
                  <EditorProject.TreeNodeInput
                    id={node.id}
                    value={caption}
                    disabled
                  />
                )}
              </EditorProject.Form>
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
        {renderFileFolderToolbar(isFolder, node.module, node.id, node.icon)}
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
          // draggable
          paddingLeft={10}
          tree={state.tree}
          onChange={handleChange}
          renderNode={renderNode}
        />
      </EditorProject.TreeContent>
      <ContextMenu id="FILE_CONTEXT_MENU">
        {/* Add copy / cut later */}
        {/* <MenuItem data={{ action: "copy" }} onClick={this.handleContextClick}>
            Copy
          </MenuItem>
          <MenuItem divider /> */}
        <MenuItem data={{ action: "rename" }} onClick={handleContextClick}>
          Rename
        </MenuItem>
        <MenuItem data={{ action: "delete" }} onClick={handleContextClick}>
          Delete
        </MenuItem>
      </ContextMenu>
    </EditorProject>
  );
}
