import { FC } from 'react';
import { WrapperBasketFullProps } from '.';
import { StyledWrapperBasketFull } from './WrapperBasketFull.styles';

export const WrapperBasketFull: FC<WrapperBasketFullProps> = (props) => {
	return <StyledWrapperBasketFull {...props}></StyledWrapperBasketFull>;
};
