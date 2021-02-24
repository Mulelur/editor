import React from "react";
import { EditorMenu } from "../components";
import EditorMenuData from "../fixtures/editorMenuData.json";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import "../components/editorMenu/styles/react-contextmenu.scss";

function handleContextClick(e, data) {
  console.log(data.foo);
}

export default function EditorMenuContainer() {
  return (
    <>
      <EditorMenu>
        {EditorMenuData.map((item) => (
          <>
            <ContextMenuTrigger
              id={item.id}
              key={item.id}
              name={item.id}
              // collect={collect}
              holdToDisplay={1}
              onItemClick={handleContextClick}
            >
              <EditorMenu.Title key={item.id}>{item.title}</EditorMenu.Title>
            </ContextMenuTrigger>
            {item.contextMenu.length >= 1 && (
              <ContextMenu id={item.id}>
                {item.contextMenu.map((context, index) => (
                  <MenuItem
                    key={index}
                    data={{ foo: "bar" }}
                    onClick={handleContextClick}
                  >
                    {context.title}
                    {console.log(context.divider)}
                    <di>
                      {context.divider === "true" && <MenuItem divider />}
                    </di>
                  </MenuItem>
                ))}
              </ContextMenu>
            )}
          </>
        ))}
      </EditorMenu>
    </>
  );
}
