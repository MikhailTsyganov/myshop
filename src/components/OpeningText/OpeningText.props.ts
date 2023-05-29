import { ComponentType } from "react";

export type THidden = "xxs" | "xs" | "sm" | "md" | "lg";

export interface OpeningTextProps {
  Component?: ComponentType<{ className: string }> | string;
  buttonText?: { onShow: string; onHide: string };
  height: string;
  margin?: string;
  colorizedButton?: boolean;
  isHidden?: THidden;
}
