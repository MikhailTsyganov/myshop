import { FC } from 'react';
import { WrapperBasketFullFlexProps } from '.';
import { StyledWrapperBasketFullFlex } from './WrapperBasketFullFlex.styles';

export const WrapperBasketFullFlex: FC<WrapperBasketFullFlexProps> = (props) => {
	return <StyledWrapperBasketFullFlex {...props}></StyledWrapperBasketFullFlex>;
};
