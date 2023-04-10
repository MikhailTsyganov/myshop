export interface ButtonCounterProps {
  id: "increment" | "decrement";
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
}
