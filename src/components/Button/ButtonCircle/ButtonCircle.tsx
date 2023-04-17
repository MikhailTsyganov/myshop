import { FC } from 'react';
import { ButtonCircleProps } from '.';
import { StyledButtonCircle } from './ButtonCircle.styles';

export const ButtonCircle: FC<ButtonCircleProps> = (props) => {
	return <StyledButtonCircle {...props}></StyledButtonCircle>;
};
