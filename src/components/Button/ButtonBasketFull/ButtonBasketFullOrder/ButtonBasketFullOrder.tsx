import { FC } from 'react';
import { ButtonBasketFullOrderProps } from '.';
import { StyledButtonBasketFullOrder } from './ButtonBasketFullOrder.styles';

export const ButtonBasketFullOrder: FC<ButtonBasketFullOrderProps> = (props) => {
	return <StyledButtonBasketFullOrder {...props}></StyledButtonBasketFullOrder>;
};
