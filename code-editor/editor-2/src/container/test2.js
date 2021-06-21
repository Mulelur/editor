import React, { useReducer, useState } from "react";
import Editor from "../components/editor";
import EditorMenuContainer from "./editorMenu";
import EdiortSideContainer from "./editorSide";
import { EditorContextTree } from "../context/editorContext";
import EditorWorkBenchContainer from "./editorWorkBench";
import _ from "lodash";
import deepdash from "deepdash";

deepdash(_);

export default function EditorContainer() {
  const [tree, setTree] = useState();
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
    showInput: false,
    folderCollapsed: false,
    nodefolderCollapsed: true,
    cloneItem: {},
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "addItem":
        switch (action.payload.type) {
          case "folder":
            const newFolderItem = {
              id: `root-${Date.now()}`,
              module: action.payload.type,
              children: [],
              collapsed: state.nodefolderCollapsed,
            };
            const newTree = _.mapDeep(state.tree, (item, key, parentValue) => {
              const cloneItem = Object.assign({}, item);
              if (cloneItem) {
                if (cloneItem.id === state.selected.id && cloneItem.children) {
                  // folder
                  cloneItem.children.push(newFolderItem);
                }
              }
              return cloneItem;
            });
            console.log(newTree);
            state.tree = { ...newTree };
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
              state.tree,
              (item, key, parentValue) => {
                const cloneItem = Object.assign({}, item);
                if (cloneItem) {
                  if (
                    cloneItem.id === state.selected.id &&
                    cloneItem.children
                  ) {
                    // folder
                    cloneItem.children.push(newFileItem);
                  }
                }
                return { ...cloneItem };
              }
            );
            console.log("still do not work File");
            state.tree = newFileTree;
            return state.tree;
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
        return state;
      case "showInput":
        state.showInput = !action.payload;
        return { ...state };
      case "changeTree":
        state.tree = action.payload;
        return { ...state };
      case "setFolderCollapsed":
        // (searchActive) => !searchActive)
        // state.folderCollapsed = !state.folderCollapsed;
        // state.folderCollapsed = state.folderCollapsed ? false : true;
        return state;
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
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log({ ...state.tree });
  return (
    <EditorContextTree.Provider value={{ state, dispatch }}>
      <Editor>
        <EditorMenuContainer />
        <EdiortSideContainer />
        <EditorWorkBenchContainer />
      </Editor>
    </EditorContextTree.Provider>
  );
}
