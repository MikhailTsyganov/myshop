import { FC } from 'react';
import { WrapperSidebarProps } from '.';
import { StyledWrapperSidebar } from './WrapperSidebar.styles';

export const WrapperSidebar: FC<WrapperSidebarProps> = (props) => {
	return <StyledWrapperSidebar {...props}></StyledWrapperSidebar>;
};
