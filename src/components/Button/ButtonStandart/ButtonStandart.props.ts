export interface ButtonStandartProps {
  children?: React.ReactNode;
  primary?: boolean;
  outlined?: boolean;
  display?: "flex";
  alignItems?: "start" | "center" | "end";
  justify?: "start" | "center" | "end";
  type?: "submit";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  // style?: React.CSSProperties;
  // isDisabled?: boolean;
}
