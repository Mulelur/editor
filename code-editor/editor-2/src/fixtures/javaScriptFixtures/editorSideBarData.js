import { iconColor } from "../../utils/colors/colors";
import {
  DashBoard,
  GitHubIcon,
  SettingsIcon,
  SreachIcon,
} from "../../utils/icons/editorSideBarIcons";

export const EditorSideBarIconData = [
  {
    title: "DashBoard",
    icon: <DashBoard width="24" height="24" fillColor={iconColor} />,
  },
  {
    title: "GitHub",
    icon: <GitHubIcon width="24" height="24" fillColor={iconColor} />,
  },
  {
    title: "Sreach",
    icon: <SreachIcon width="24" height="24" fillColor={iconColor} />,
  },
  {
    title: "Settings",
    icon: <SettingsIcon width="24" height="24" fillColor={iconColor} />,
  },
];
