import { FC } from "react";
import { ButtonHomeAboutUsProps } from "./ButtonHomeAboutUs.props";
import { StyledButtonHomeAboutUs } from "./ButtonHomeAboutUs.styles";

export const ButtonHomeAboutUs: FC<ButtonHomeAboutUsProps> = (props) => {
  const { children } = props;
  return (
    <StyledButtonHomeAboutUs {...props}>{children}</StyledButtonHomeAboutUs>
  );
};
