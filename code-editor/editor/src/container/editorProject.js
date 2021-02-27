import React, { useState } from "react";
import { EditorProject } from "../components";
import editorTreeData from "../fixtures/editorTreeFilesData.json";
import Tree from "react-ui-tree";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

export default function EditorProjectContainer() {
  // const [tree, setTree] = useState(editorTreeData);
  const tree = {
    module: "react-ui-tree",
    children: [
      {
        collapsed: true,
        module: "dist",
        children: [
          {
            module: "node.js",
          },
        ],
      },
    ],
  };
  const renderNode = (node) => {
    const renderFileFolderToolbar = (isFolder, caption) => (
      <>
        {isFolder ? FolderIcon : InsertDriveFileIcon}
        <div>
          <span>{caption}</span>
        </div>
      </>
    );

    const isFolder = node.hasOwnProperty("children");
    return renderFileFolderToolbar(isFolder, node.module);
  };
  return (
    <EditorProject>
      orange
      <EditorProject.TreeHeader>
        <EditorProject.Title>File</EditorProject.Title>
      </EditorProject.TreeHeader>
      <EditorProject.TreeContent>
        <Tree
          paddingLeft={10}
          tree={tree}
          // onChange={handleChange}
          renderNode={renderNode}
        />
      </EditorProject.TreeContent>
    </EditorProject>
  );
}
