import { FC } from 'react';
import { ButtonBasketFullDeliveryAddressProps } from '.';
import { StyledButtonBasketFullDeliveryAddress } from './ButtonBasketFullDeliveryAddress.styles';

export const ButtonBasketFullDeliveryAddress: FC<ButtonBasketFullDeliveryAddressProps> = (props) => {
	return <StyledButtonBasketFullDeliveryAddress {...props}></StyledButtonBasketFullDeliveryAddress>;
};
