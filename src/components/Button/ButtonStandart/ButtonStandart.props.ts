export interface ButtonStandartProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  primary?: boolean;
  outlined?: boolean;
  padding?: string;
  margin?: string;
  display?: "block" | "flex" | "inline-block" | "inline";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end";
}
