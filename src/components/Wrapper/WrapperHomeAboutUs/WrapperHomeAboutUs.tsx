import { FC } from 'react';
import { WrapperHomeAboutUsProps } from '.';
import { StyledWrapperHomeAboutUs } from './WrapperHomeAboutUs.styles';

export const WrapperHomeAboutUs: FC<WrapperHomeAboutUsProps> = (props) => {
	return <StyledWrapperHomeAboutUs {...props}></StyledWrapperHomeAboutUs>;
};
