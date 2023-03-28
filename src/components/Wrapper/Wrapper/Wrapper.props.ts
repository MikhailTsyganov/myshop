export interface WrapperProps {
  display?: string;
  children?: React.ReactNode[] | React.ReactNode;
  justify?: "start" | "center" | "end";
  align?: "start" | "center" | "end";
  minWidth?: string;
  width?: string;
  height?: string;
  margin?: { xs?: string; sm?: string; md?: string; lg?: string } | string;
  bgc?: string;
  overflow?: "visible" | "hidden" | "scroll" | "auto";
  order?: { xs?: number; sm?: number; md?: number; lg?: number } | number;
  flexWrap?: { xs?: string; sm?: string; md?: string; lg?: string } | string;
}
