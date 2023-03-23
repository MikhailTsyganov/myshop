export interface WrapperProps {
  display?: string;
  children?: React.ReactNode[] | React.ReactNode;
  justify?: "start" | "center" | "end";
  align?: "start" | "center" | "end";
  width?: string;
  height?: string;
  margin?: string;
  bgc?: string;
  overflow?: "visible" | "hidden" | "scroll" | "auto";
}
