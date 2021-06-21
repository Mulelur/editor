import React from "react";
import { EditorSide, EditorSideBar, EditorSideDrawer } from "../components";
import { EditorSideBarIconData } from "../fixtures/javaScriptFixtures/editorSideBarData";
import EditorProjectContainer from "./editorProject";

export default function EdiortSideContainer() {
  return (
    <EditorSide>
      <EditorSideBar>
        <EditorSideBar.Frame>
          {EditorSideBarIconData.map((item, index) => {
            return <EditorSideBar.Inner>{item.icon}</EditorSideBar.Inner>;
          })}
        </EditorSideBar.Frame>
      </EditorSideBar>
      <EditorSideDrawer>
        <EditorProjectContainer />
      </EditorSideDrawer>
    </EditorSide>
  );
}
