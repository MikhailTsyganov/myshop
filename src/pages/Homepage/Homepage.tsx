import { FC, useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";

import { HomepageProps } from ".";
import { StyledHomepage } from "./Homepage.styles";

import { Header, Main, Footer } from "containers";

import { goodsApi } from "redux/api/goods/goods.api";
import {
  List,
  GoodsItemHomepage,
  ButtonShowMore,
  Slider,
  HomeAboutUs,
  OpeningText,
} from "components";
import { useWindowSizeDevice } from "hooks";

export const Homepage: FC<HomepageProps> = (props) => {
  const [page, setPage] = useState(1);

  const { numberOfGoodsInRequest } = useWindowSizeDevice(setPage);
  const { data } = goodsApi.useGetAllGoodsQuery({
    limit: numberOfGoodsInRequest,
    page,
  });
  console.log(numberOfGoodsInRequest);

  const onShowMore = () => {
    setPage((prevState) => prevState + 1);
  };

  console.log(data);

  return (
    <>
      <Header />
      <Main>
        {data?.goods && (
          <StyledHomepage {...props}>
            <Slider autoplay autoplayTime={4000} />
            <List
              display="grid"
              Component={GoodsItemHomepage}
              array={data.goods}
            />

            {data.goods.length < data.total && (
              <ButtonShowMore outlined display="flex" onClick={onShowMore}>
                Показать еще
                <BsArrowDownShort size={30} />
              </ButtonShowMore>
            )}

            <OpeningText
              Component={HomeAboutUs}
              height="136px"
              buttonText={{ onShow: "Читать далее", onHide: "Свернуть" }}
              margin="72px 0 0"
              isHidden="sm"
              colorizedButton
            />
          </StyledHomepage>
        )}
      </Main>
      <Footer />
    </>
  );
};
