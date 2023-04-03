import { FC } from 'react';
import { ButtonShowMoreProps } from '.';
import { StyledButtonShowMore } from './ButtonShowMore.styles';

export const ButtonShowMore: FC<ButtonShowMoreProps> = (props) => {
	return <StyledButtonShowMore {...props}></StyledButtonShowMore>;
};
