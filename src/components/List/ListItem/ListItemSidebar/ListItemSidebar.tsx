import { FC } from "react";
import { ListItemSidebarProps } from ".";
import { StyledListItemSidebar } from "./ListItemSidebar.styles";
import { useNavigate } from "react-router-dom";

export const ListItemSidebar: FC<ListItemSidebarProps> = (props) => {
  const { item, onMouseEnter } = props;
  const { name, id, path, parentPath = "" } = item;

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/goods${parentPath}${path}`);
  };

  const onMouseEnterInside = (e: React.MouseEvent<HTMLLIElement>) => {
    if (onMouseEnter) {
      // e.currentTarget.classList.add("selectedListItemSidebar");
      onMouseEnter(id, e);
    }
  };

  return (
    <>
      {console.log("ListItemSidebar")}
      <StyledListItemSidebar
        {...props}
        onMouseEnter={onMouseEnterInside}
        onClick={onClickHandler}
      >
        <span>{name}</span>
      </StyledListItemSidebar>
    </>
  );
};
