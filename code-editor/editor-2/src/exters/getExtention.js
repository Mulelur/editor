import React from "react";
import {
  DefaultIcon,
  HtmlIcon,
  JavascriptIcons,
} from "../utils/icons/languageIcons";
import js from "../assets/Licons/file_type_js.svg";
import defaultIcon from "../assets/Licons/format_align_left_black_24dp.svg";

export function getExtenton(title) {
  const arr = title.split(".");
  const extention = arr[1];
  switch (extention) {
    case "html":
      return { language: "html", icon: js };
    case "js":
      return { language: "javascript", icon: js };
    case "ts":
      return "typeScript";
    case "css":
      return "css";
    case "less":
      return "less";
    case "scss":
      return "scss";
    case "json":
      return "json";
    case "java":
      return "java";
    case "py":
      return "python";
    default:
      return { language: "txt", icon: defaultIcon };
  }
}
