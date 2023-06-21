import { FC, useState, useEffect } from "react";
import { GoodsByCategoryProps } from ".";
import { StyledGoodsByCategory } from "./GoodsByCategory.styles";
import { List, ButtonShowMore, GoodsItemHomepage } from "components";
import { BsArrowDownShort } from "react-icons/bs";
import { goodsApi } from "redux/api/goods/goods.api";
import { useParams } from "react-router-dom";
import { useWindowSizeDevice, useUrlSearch, useResetPage } from "hooks";
import { Header, Main, Footer } from "containers";

export const GoodsByCategory: FC<GoodsByCategoryProps> = (props) => {
  const [page, setPage] = useState(1);
  // console.log("this is page:", page);

  const params = useParams();
  useEffect(() => {
    console.log("GoodsByCategory params", params);
  }, [params]);

  const { optionSize, setOptionSize } = useWindowSizeDevice();
  const { limitByUrl } = useUrlSearch(
    optionSize.numberOfGoodsInRequest,
    setOptionSize
  );
  useResetPage(setPage, optionSize.device, limitByUrl);

  const { data } = goodsApi.useGetGoodsByCategoryQuery(
    {
      limit: limitByUrl,
      page,
      category: params.category,
      subcategory: params.subcategory,
    },
    { skip: limitByUrl === 0 }
  );

  const onShowMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <StyledGoodsByCategory {...props}>
      <Header />
      <Main>
        {data?.goods && (
          <>
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
          </>
        )}
      </Main>
      <Footer />
    </StyledGoodsByCategory>
  );
};
