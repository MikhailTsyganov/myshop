import { FC, useState } from "react";
import { OpeningTextProps } from ".";
import { StyledOpeningText, ShowButton } from "./OpeningText.styles";

export const OpeningText: FC<OpeningTextProps> = (props) => {
  const buttonTextInitial = { onShow: "Развернуть", onHide: "Свернуть" };
  const { Component, colorizedButton, buttonText = buttonTextInitial } = props;
  const [isOpen, setIsOpen] = useState(false);

  const ShowButtonHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledOpeningText {...props} isOpen={isOpen}>
      {typeof Component === "function" && (
        <Component className="OpeningText_text" />
      )}
      {typeof Component === "string" && (
        <p className="OpeningText_text">{Component}</p>
      )}

      <ShowButton onClick={ShowButtonHandler} {...props}>
        {isOpen ? buttonText.onHide : buttonText.onShow}
      </ShowButton>
    </StyledOpeningText>
  );
};
