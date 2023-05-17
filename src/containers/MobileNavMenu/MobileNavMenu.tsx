import { FC } from "react";
import { MobileNavMenuProps } from ".";
import { StyledMobileNavMenu } from "./MobileNavMenu.styles";
import { NavLink } from "react-router-dom";
import { useTheme } from "styled-components";

import { BsFillPersonFill, BsCart4 } from "react-icons/bs";
import { HiHome, HiHeart } from "react-icons/hi2";
import { TbListSearch } from "react-icons/tb";

export const MobileNavMenu: FC<MobileNavMenuProps> = (props) => {
  const theme = useTheme();
  const greyColor = theme.colors.grey;

  return (
    <StyledMobileNavMenu {...props}>
      <NavLink to="/">
        <HiHome fill={greyColor} size={28} />
      </NavLink>
      <NavLink to="/sidebar">
        <TbListSearch stroke={greyColor} size={28} />
      </NavLink>
      <NavLink to="/basket">
        <BsCart4 fill={greyColor} size={28} />
      </NavLink>
      <NavLink to="/favorite">
        <HiHeart fill={greyColor} size={28} />
      </NavLink>
      <NavLink to="/profile">
        <BsFillPersonFill fill={greyColor} size={28} />
      </NavLink>
    </StyledMobileNavMenu>
  );
};
