import { ListProps, TListItem } from ".";
import { StyledList } from "./List.styles";

export const List = <T extends TListItem>(props: ListProps<T>) => {
  const { array, Component } = props;
  return (
    <StyledList {...props}>
      {array?.map((item: T) => (
        <Component item={item} key={item.id} />
      ))}
    </StyledList>
  );
};
