import React, { FC, useState, useEffect } from "react";
import { HomeAboutUsProps } from ".";
import { StyledHomeAboutUs } from "./HomeAboutUs.styles";

import {
  Title2,
  Title3,
  ButtonHomeAboutUs,
  WrapperHomeAboutUs,
} from "components";
import { aboutUsApi } from "redux/api/about-us-query/about-us-query";

export const HomeAboutUs: FC<HomeAboutUsProps> = (props) => {
  const [aboutUs, setAboutUs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const { data } = aboutUsApi.useGetAboutUsQuery("");

  useEffect(() => {
    setAboutUs(data);
  }, [data]);

  const onButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHomeAboutUs {...props}>
      <WrapperHomeAboutUs
        className={`${!isOpen && "WrapperHomeAboutUs--hidden"}`}
      >
        {aboutUs &&
          aboutUs.map(({ id, title, description }, idx) => {
            return idx === 0 ? (
              <React.Fragment key={id}>
                <Title2>{title}</Title2>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
              </React.Fragment>
            ) : (
              <React.Fragment key={id}>
                <Title3 grey fSize="16px">
                  {title}
                </Title3>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
              </React.Fragment>
            );
          })}
      </WrapperHomeAboutUs>
      <ButtonHomeAboutUs onClick={onButtonClick}>
        {isOpen ? "Свернуть" : "Читать далее"}
      </ButtonHomeAboutUs>
    </StyledHomeAboutUs>
  );
};
