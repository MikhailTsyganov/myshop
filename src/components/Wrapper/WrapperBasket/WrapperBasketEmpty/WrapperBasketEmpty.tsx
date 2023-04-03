import { FC } from 'react';
import { WrapperBasketEmptyProps } from '.';
import { StyledWrapperBasketEmpty } from './WrapperBasketEmpty.styles';

export const WrapperBasketEmpty: FC<WrapperBasketEmptyProps> = (props) => {
	return <StyledWrapperBasketEmpty {...props}></StyledWrapperBasketEmpty>;
};
