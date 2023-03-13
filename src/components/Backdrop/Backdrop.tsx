import { FC } from "react";
import { BackdropProps } from ".";
import { StyledBackdrop } from "./Backdrop.styles";

export const Backdrop: FC<BackdropProps> = ({ onCloseSidebar, children }) => {
  const onClosingByBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onCloseSidebar();
  };

  return (
    <StyledBackdrop onClick={onClosingByBackdrop}>{children}</StyledBackdrop>
  );
};
