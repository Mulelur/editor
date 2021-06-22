import React from "react";
import js from "../assets/Licons/file_type_js.svg";
import defaultIcon from "../assets/Licons/format_align_left_black_24dp 1.svg";
import html from "../assets/Licons/file_type_html.svg";
import json from "../assets/Licons/file_type_json.svg";
import php from "../assets/Licons/file_type_php3.svg";
import python from "../assets/Licons/file_type_pytyped.svg";
import scss from "../assets/Licons/file_type_scss.svg";
import typeScript from "../assets/Licons/file_type_typescript.svg";
import rollup from "../assets/Licons/file_type_rollup.svg";
import reactjs from "../assets/Licons/file_type_reactjs.svg";
import java from "../assets/Licons/file_type_class.svg";
import css from "../assets/Licons/file_type_css.svg";
import gitignore from "../assets/Licons/file_type_git.svg";

export function getExtenton(title) {
  const arr = title.split(".");
  const extention = arr[1];
  switch (extention) {
    case "html":
      return { language: "html", icon: html };
    case "js":
      return { language: "javascript", icon: js };
    case "ts":
      return { language: "typeScript", icon: typeScript };
    case "css":
      return { language: "css", icon: css };
    // case "less":
    //   return { language: "less", icon: less };
    case "scss":
      return { language: "scss", icon: scss };
    case "json":
      return { language: "json", icon: json };
    case "java":
      return { language: "java", icon: java };
    case "py":
      return { language: "python", icon: python };
    case "gitignore":
      return { language: "txt", icon: gitignore };
    default:
      return { language: "txt", icon: defaultIcon };
  }
}
