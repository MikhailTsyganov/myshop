import React, { FC, useState, useEffect } from "react";
import { HomeAboutUsProps } from ".";
import { StyledHomeAboutUs } from "./HomeAboutUs.styles";

import {
  Title2,
  Title3,
  ButtonHomeAboutUs,
  WrapperHomeAboutUs, //TODO: Удалить компоненты и почистить стили
} from "components";
import { aboutUsApi } from "redux/api/aboutUs/aboutUs.api";

export const HomeAboutUs: FC<HomeAboutUsProps> = (props) => {
  // const [aboutUs, setAboutUs] = useState([]);

  const { data } = aboutUsApi.useGetAboutUsQuery("");

  // useEffect(() => {
  //   setAboutUs(data);
  // }, [data]);

  return (
    <StyledHomeAboutUs {...props}>
      {data &&
        data.map(({ id, title, description }, idx) => {
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
    </StyledHomeAboutUs>
  );
};
