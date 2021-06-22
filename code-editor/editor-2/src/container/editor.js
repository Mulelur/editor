import React, { useReducer, useState, useEffect } from "react";
import Editor from "../components/editor";
import EditorMenuContainer from "./editorMenu";
import EditorMonacoContainer from "./editorMonaco";
import EdiortSideContainer from "./editorSide";
import { EditorContextTree } from "../context/editorContext";
import EditorWorkBenchContainer from "./editorWorkBench";
import _, { clone, indexOf } from "lodash";
import deepdash from "deepdash";
import EditorModalContainer from "./editorModal";
import { getExtenton } from "../exters/getExtention";
import js from "../assets/Licons/file_type_js.svg";
import EditorPreviewContainer from "./editorPreview";

deepdash(_);

export default function EditorContainer() {
  const initialTreeState = {
    id: "react-ui-tree",
    module: "Explorer",
    children: [],
    collapsed: true,
  };
  const initialState = {
    selected: initialTreeState,
    activeFile: {},
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
    workBench: [
      { type: "lineColumn", value: "2" },
      { type: "encoding", value: "UTF-8" },
      { type: "lndentation", value: "2" },
    ],
    preView: true,
    media: { width: "50" },
    sender: "",
    treeNodeInput: {
      disabled: false,
      id: "",
    },
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "activeFile":
        switch (action.payload.type) {
          case "changeValue":
            // state.activeFile.file.value.concat(action.payload.value);
            state.activeFile.value = action.payload.value;
            state.activeFile.mode = "unSaved";
            return { ...state };
          case "save":
            state.activeFile.mode = "saved";
            return { ...state };
          default:
            throw new Error();
        }
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
            state.selected = newFolderItem;
            state.showInput.value = "";
            state.showInput.state = false;
            const nf = _.findDeep(
              state.tree,
              (item) => item.id === action.payload.node.id,
              {
                childrenPath: "children",
              }
            );
            nf.value.collapsed = false;
            console.log(state.selectedArry);
            return { ...state };
          case "file":
            const language = { ...getExtenton(action.payload.title) };
            const newFileItem = {
              id: `${Date.now()}`,
              leaf: true,
              module: action.payload.title,
              value: "",
              mode: "saved",
              language: language.language,
              icon: language.icon,
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
            state.selectedArry.push(newFileItem);
            state.activeFile = newFileItem;
            state.showInput.value = "";
            state.showInput.state = false;
            const n = _.findDeep(
              state.tree,
              (item) => item.id === action.payload.node.id,
              {
                childrenPath: "children",
              }
            );
            n.value.collapsed = false;
            // const i = _.findDeep(
            //   state.tree,
            //   (item) => item.id === newFileItem.id,
            //   {
            //     childrenPath: "children",
            //   }
            // );
            // i.value.icon = { ...language.icon };
            // console.log(i);
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
          case "treeNodeInput":
            state.treeNodeInput.disabled = !action.payload.value;
            state.treeNodeInput.id = action.payload.id;
            return { ...state };
          case "preView":
            state.preView = !action.payload.prevState;
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
      case "removePreview":
        // state.selectedArry.pop(action.payload.value);
        action.payload.value.indexOf();
        return { ...state };
      case "modalActions":
        switch (action.payload.type) {
          case "delete":
            state.selectedArry.splice(action.payload.value, 1);
            if (state.selectedArry.length === 0) {
              state.activeFile = {};
            } else {
              state.activeFile =
                state.selectedArry[state.selectedArry.length - 1];
            }
            return { ...state };
          case "addItem":
            if (state.selectedArry.includes(action.payload.value)) {
              return { ...state };
            } else {
              state.selectedArry.push(action.payload.value);
              state.activeFile = action.payload.value;
              state.activeFile.mode = "preview";
            }
            return { ...state };
          case "setActive":
            state.activeFile = action.payload.value;
            return { ...state };
          default:
            throw new Error();
        }
      case "contextClick":
        switch (action.payload.type) {
          case "rename":
            const renameObj = _.findDeep(
              state.tree,
              (item) => item.id === action.payload.id,
              {
                childrenPath: "children",
              }
            );
            const language = { ...getExtenton(action.payload.value) };
            renameObj.value.language = language.language;
            renameObj.value.icon = language.icon;
            renameObj.value.module = action.payload.value;
            return { ...state };
          case "delete":
            const deleteObj = _.findDeep(
              state.tree,
              (item) => item.id === action.payload.id,
              {
                childrenPath: "children",
              }
            );
            // if()
            if (deleteObj) {
              const i = deleteObj.parent.children.indexOf(deleteObj.value);
              deleteObj.parent.children.splice(i, 1);
              const i2 = state.selectedArry.indexOf(deleteObj.value);
              state.selectedArry.splice(i2, 1);
              console.log(state.selectedArry);
              if (state.selectedArry.length === 0) {
                state.activeFile = {};
              } else {
                state.activeFile =
                  state.selectedArry[state.selectedArry.length - 1];
              }
            }
            return { ...state };
          default:
            throw new Error();
        }
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.preView);
  // useEffect(() => {
  //   dispatch({
  //     type: "toggel",
  //     payload: {
  //       type: "treeNodeInput",
  //       value: state.treeNodeInput.disabled,
  //     },
  //   });
  // }, [state.treeNodeInput]);
  return (
    <EditorContextTree.Provider value={{ state, dispatch }}>
      <Editor>
        <EditorMenuContainer />
        <Editor.Row>
          <EdiortSideContainer />
          <Editor.Row>
            <Editor.Col>
              <EditorModalContainer />
              <EditorMonacoContainer />
            </Editor.Col>
            <EditorPreviewContainer />
          </Editor.Row>
        </Editor.Row>
        <EditorWorkBenchContainer />
      </Editor>
    </EditorContextTree.Provider>
  );
}
