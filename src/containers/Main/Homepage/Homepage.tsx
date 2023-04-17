import { useState, useEffect, FC } from "react";
import { BsArrowDownShort } from "react-icons/bs";

import { HomepageProps } from ".";
import { StyledHomepage } from "./Homepage.styles";

import { goodsApi } from "redux/api/goods-query/goods-query";
import { aboutUsApi } from "redux/api/about-us-query/about-us-query";

import {
  List,
  GoodsItemHomepage,
  ListItemAboutUs,
  ButtonHomeAboutUs,
  ButtonShowMore,
  WrapperPLUG,
  WrapperHomeAboutUs,
  Slider,
} from "components";

export const Homepage: FC<HomepageProps> = (props) => {
  const [goods, setGoods] = useState([]);
  const [aboutUs, setAboutUs] = useState([]);

  const goodsApiFetch = goodsApi.useGetAllGoodsQuery("");
  const aboutUsApiFetch = aboutUsApi.useGetAboutUsQuery("");
  // console.log(aboutUs);

  // const a = aboutUs.reduce((prev, item) => {
  //   console.log(prev, item);
  //   return item;

  //   // if (prev.id !== item.id) {
  //   //   return { ...item };
  //   // }
  // }, {});

  useEffect(() => {
    setGoods(goodsApiFetch.data);
    setAboutUs(aboutUsApiFetch.data);
  }, [goodsApiFetch.data, aboutUsApiFetch.data]);
  return (
    <StyledHomepage {...props}>
      <Slider />
      {/* <WrapperPLUG
        height="412px"
        minWidth="100%"
        margin="0 0 36px"
        bgc="red"
      ></WrapperPLUG> */}

      <List display="grid" Component={GoodsItemHomepage} array={goods} />

      <ButtonShowMore outlined display="flex">
        Показать еще
        <BsArrowDownShort size={30} />
      </ButtonShowMore>
      <WrapperHomeAboutUs>
        {/* <List array={aboutUs} Component={ListItemAboutUs} /> */}
        {/* {aboutUs.map(({ id, title, textObj }, idx) => {
          return (
            <React.Fragment key={id}>
              {idx === 0 ? (
                <Title2 black>{title}</Title2>
              ) : (
                <Title3 grey fSize="16px">
                  {title}
                </Title3>
              )}
              {textObj.map(({ textId, text }) => (
                <ParagraphStandart key={textId} grey>
                  {text}
                </ParagraphStandart>
              ))}
            </React.Fragment>
          );
        })} */}
        <ButtonHomeAboutUs>Читать далее</ButtonHomeAboutUs>
      </WrapperHomeAboutUs>
    </StyledHomepage>
  );
};
