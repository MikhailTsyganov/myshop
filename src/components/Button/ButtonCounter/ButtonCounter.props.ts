export interface ButtonCounterProps {
  id: "increment" | "decrement";
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
}
