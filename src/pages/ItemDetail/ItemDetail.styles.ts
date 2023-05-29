import { StyledWrapperStandart } from "components/Wrapper/WrapperStandart/WrapperStandart.styles";
import { ItemDetailProps } from "./ItemDetail.props";
import styled from "styled-components";

export const StyledItemDetail = styled(StyledWrapperStandart)<ItemDetailProps>`
  & h1 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    margin-top: 2px;
  }
`;

export const WrapperGoodDetailsGreyBorder = styled.div`
  padding: 16px 0;
  border-top: 0.1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const ParagraphGoodPrice = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
`;

export const WrapperGoodsVariant = styled.div`
  & .goodsVariant_color {
    color: ${({ theme }) => theme.colors.grey};
  }

  & .goodsVariant_list {
    display: flex;
    margin: 8px 0 24px;
    & li {
      width: 48px;
      height: 64px;
      margin-right: 8px;
    }
  }

  & .goodsVariant_image {
    border-radius: 4px;
  }
`;

export const ParagraphGoodBrand = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
`;

export const WrapperGoodDetailsRating = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.grey};

  & .WrapperGoodDetailsRating_review {
    border-bottom: 1px dashed;
    margin-right: 12px;
  }

  & .WrapperGoodDetailsRating_article {
    margin-right: 12px;

    & > span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & .WrapperGoodDetailsRating_sold {
  }
`;

export const WrapperGoodDetailsDescription = styled.div`
  & h2 {
    margin-bottom: 8px;
  }
`;
