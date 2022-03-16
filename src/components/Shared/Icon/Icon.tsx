/**
 *
 * DON'T CHANGE THIS FILE, IT'S AUTOMATICALLY GENERATED BY RUNNING "npm run generate:icons"
 *
 */
import React, { ReactElement } from "react";
import Bell from "./icons/bell.svg";

export type IconName = "bell";

interface Props {
  name: IconName;
  className?: string;
}

const getIcon = (inputName: IconName, className = ""): ReactElement => {
  switch (inputName) {
    case "bell":
      return <Bell className={className || null} />;
  }
};

const Icon: React.FC<Props> = ({ name, className = "" }) => {
  return getIcon(name, className);
};

export default Icon;