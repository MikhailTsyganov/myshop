import { FC } from 'react';
import { InputProps } from '.';
import { StyledInput } from './Input.styles';

export const Input: FC<InputProps> = (props) => {
	return <StyledInput {...props}></StyledInput>;
};
