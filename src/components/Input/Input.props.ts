export interface InputProps {
  id?: string;
  type: "text" | "checkbox";
  value?: string;
  placeholder?: string;
  checked?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
