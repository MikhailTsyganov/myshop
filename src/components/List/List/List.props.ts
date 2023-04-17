import { ComponentType } from "react";

export type TDisplay = "grid";

export type TListItem = {
  id: string | number;
};

export interface ListProps<T extends TListItem> {
  array: T[];
  Component: ComponentType<{ item: T }>;
  display?: TDisplay;
}
