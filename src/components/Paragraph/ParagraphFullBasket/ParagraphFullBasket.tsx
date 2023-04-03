import { FC } from 'react';
import { ParagraphFullBasketProps } from '.';
import { StyledParagraphFullBasket } from './ParagraphFullBasket.styles';

export const ParagraphFullBasket: FC<ParagraphFullBasketProps> = (props) => {
	return <StyledParagraphFullBasket {...props}></StyledParagraphFullBasket>;
};
