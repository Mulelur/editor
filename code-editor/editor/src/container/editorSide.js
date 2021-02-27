import React, { useReducer } from "react";
import { Tooltip } from "@material-ui/core";
import { EditorSide, EditorSideBar, EditorSideDrawer } from "../components";
import editorSideBarData from "../fixtures/editorSideBar.json";
import EditorProjectContainer from "./editorProject";
import EditorSearchContainer from "./editorSearch";

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "projects":
      if (action.payload.element.type === state.element.type) {
        state.close = true;
      }

      return action.payload;

    case "search":
      return { element: <EditorSearchContainer />, close: false };
    default:
      throw new Error();
  }
}
export default function EditorSideContainer() {
  const initialState = { element: <EditorProjectContainer />, close: false };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <EditorSide>
        <EditorSideBar>
          <EditorSideBar.Frame>
            {editorSideBarData.map((item, index) => (
              <EditorSideBar.Inner
                key={index}
                onClick={() =>
                  dispatch({ type: item.title, payload: initialState })
                }
              >
                <Tooltip
                  disableFocusListener
                  title={item.title}
                  placement="right"
                >
                  <div>
                    <EditorSideBar.Image id={item.id} src={item.image} />
                  </div>
                </Tooltip>
              </EditorSideBar.Inner>
            ))}
          </EditorSideBar.Frame>
        </EditorSideBar>
        <EditorSideDrawer>
          <EditorSideDrawer.Inner>{state.element}</EditorSideDrawer.Inner>
        </EditorSideDrawer>
      </EditorSide>
    </>
  );
}
