import { FC, useEffect, useState } from "react";
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
import { useWindowSizeDevice, useUrlSearch, useResetPage } from "hooks";

export const Homepage: FC<HomepageProps> = (props) => {
  const [page, setPage] = useState(1);

  const { optionSize, setOptionSize } = useWindowSizeDevice();
  const { limitByUrl } = useUrlSearch(
    optionSize.numberOfGoodsInRequest,
    setOptionSize
  );
  useResetPage(setPage, optionSize.device, limitByUrl);

  const { data, isSuccess } = goodsApi.useGetAllGoodsQuery(
    {
      limit: limitByUrl,
      page,
    },
    { skip: limitByUrl === 0 }
  );

  // console.log("rerender", isSuccess);

  // useEffect(() => {
  //   console.log("изменился isSuccess", isSuccess);
  // }, [isSuccess]);

  const onShowMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <Header />
      {isSuccess && (
        <>
          {/* {console.log("render RETURN")} */}
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
        </>
      )}
      <Footer />
    </>
  );
};
