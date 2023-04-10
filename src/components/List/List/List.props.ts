import { ComponentType } from "react";

export type TListItem = {
  id: string | number;
};

export interface ListProps<T extends TListItem> {
  array: T[];
  Component: ComponentType<{ item: T }>;
}
