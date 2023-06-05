import { MouseEventHandler } from "react";

export interface ButtonProps {
  children: any;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
