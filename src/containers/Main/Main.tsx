import React, { FC } from "react";
import { MainProps } from ".";

import { StyledMain } from "./Main.styles";
import {
  Container,
  ListGoods,
  ButtonHomeAboutUs,
  Title2,
  Title3,
  Paragraph,
} from "components";
import { Basket } from "containers/Basket";

import { BsArrowDownShort } from "react-icons/bs";

// import { allGoods } from "../../api/allGoods";
import { WrapperPLUG } from "components/Wrapper/WrapperPLUG";
import { ButtonShowMore } from "components/Button/ButtonShowMore";
import { WrapperHomeAboutUs } from "components/Wrapper/WrapperHomeAboutUs";
import { List } from "components/List/List";
import { GoodsItemHomepage } from "components/List/GoodsItemHomepage";

export const Main: FC<MainProps> = (props) => {
  const { goods } = props;
  console.log(goods);

  return (
    <StyledMain {...props}>
      <Container>
        <WrapperPLUG
          height="412px"
          minWidth="100%"
          margin="0 0 36px"
          bgc="red"
        ></WrapperPLUG>

        <List array={goods} Component={GoodsItemHomepage} />
        {/* <ListGoods array={goods} type="main" /> */}

        <ButtonShowMore outlined display="flex">
          Показать еще
          <BsArrowDownShort size={30} />
        </ButtonShowMore>

        <WrapperHomeAboutUs>
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
                  <Paragraph key={textId} grey>
                    {text}
                  </Paragraph>
                ))}
              </React.Fragment>
            );
          })} */}
          <ButtonHomeAboutUs>Читать далее</ButtonHomeAboutUs>
        </WrapperHomeAboutUs>
        {/* <Basket /> */}
      </Container>
    </StyledMain>
  );
};
