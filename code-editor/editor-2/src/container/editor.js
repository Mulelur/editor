import React, { useReducer, useState } from "react";
import Editor from "../components/editor";
import EditorMenuContainer from "./editorMenu";
import EditorMonacoContainer from "./editorMonaco";
import EdiortSideContainer from "./editorSide";
import { EditorContextTree } from "../context/editorContext";
import EditorWorkBenchContainer from "./editorWorkBench";
import _, { clone } from "lodash";
import deepdash from "deepdash";

deepdash(_);

export default function EditorContainer() {
  const initialTreeState = {
    id: "react-ui-tree",
    module: "react-ui-tree",
    children: [],
    collapsed: true,
  };
  const initialState = {
    selected: initialTreeState,
    activeFile: {
      file: "",
      modue: "",
    },
    inputValue: "",
    selectedArry: [],
    tree: initialTreeState,
    showInput: {
      value: "",
      state: false,
    },
    folderCollapsed: false,
    nodefolderCollapsed: false,
    cloneItem: {},
    workBench: {
      encoding: "UTF-8",
      language: "javascript",
      lndentation: "2",
      lineColumn: "2",
    },
    sender: "",
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "addItem":
        switch (action.payload.type) {
          case "folder":
            const newFolderItem = {
              id: `root-${Date.now()}`,
              module: action.payload.title,
              children: [],
              collapsed: false,
            };
            const newTree = _.mapDeep(state.tree, (item, key, parentValue) => {
              const cloneItem = Object.assign({}, item);
              if (cloneItem) {
                if (cloneItem.id === state.selected.id && cloneItem.children) {
                  // folder
                  cloneItem.children.push(newFolderItem);
                }
              }
              return [cloneItem];
            });
            state.tree = { ...newTree[0][0] };
            state.showInput.state = false;
            const nf = _.findDeep(
              state.tree,
              (item) => item.id === action.payload.node.id,
              {
                childrenPath: "children",
              }
            );
            nf.value.collapsed = false;
            return { ...state };
          case "file":
            const newFileItem = {
              id: `${Date.now()}`,
              leaf: true,
              module: action.payload.title,
              value: "",
              language: "javascript",
            };

            const newFileTree = _.mapDeep(
              action.payload.tree,
              (item, key, parentValue) => {
                const cloneItem = Object.assign({}, item);
                if (cloneItem) {
                  if (
                    cloneItem.id === action.payload.active.id &&
                    cloneItem.children
                  ) {
                    // folder
                    cloneItem.children.push(newFileItem);
                  }
                }
                return [cloneItem];
              }
            );
            state.tree = { ...newFileTree[0][0] };
            state.showInput.state = false;
            const n = _.findDeep(
              state.tree,
              (item) => item.id === action.payload.node.id,
              {
                childrenPath: "children",
              }
            );
            n.value.collapsed = false;
            return { ...state };
          default:
            throw new Error();
        }

      case "setActiveFile":
        state.activeFile = action.payload;
        return state;
      case "setSelectedArry":
        state.selectedArry = action.payload;
        return state;
      case "select":
        state.selected = action.payload;
        return { ...state };
      case "showInput":
        switch (action.payload.type) {
          case "toggle":
            state.showInput.state = !action.payload.prevState;
            return { ...state };
          case "changeValue":
            state.showInput.value = action.payload.value;
            return { ...state };
          default:
            throw new Error();
        }
      case "changeTree":
        state.tree = action.payload;
        return { ...state };

      case "toggel":
        switch (action.payload.type) {
          case "nodefolderCollapesd":
            state.nodefolderCollapsed = !action.payload.preState;
            const n = _.findDeep(
              state.tree,
              (item) => item.id === action.payload.value.id,
              {
                childrenPath: "children",
              }
            );
            n.value.collapsed = !action.payload.preState;
            return { ...state };
          default:
            throw new Error();
        }
      case "inputonChange":
        state.inputValue = action.payload.value;
        return { ...state };
      case "setSender":
        switch (action.payload.type) {
          case "addItem":
            state.sender = action.payload.value;
            return { ...state };
          default:
            throw new Error();
        }
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <EditorContextTree.Provider value={{ state, dispatch }}>
      <Editor>
        <EditorMenuContainer />
        <Editor.Row>
          <EdiortSideContainer />
          <EditorMonacoContainer />
        </Editor.Row>
        <EditorWorkBenchContainer />
      </Editor>
    </EditorContextTree.Provider>
  );
}
