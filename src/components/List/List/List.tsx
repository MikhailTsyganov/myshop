import { FC } from "react";
import { ListProps, TListItem } from ".";
import { StyledList } from "./List.styles";

// export const List = <T extends TListItem>(props: ListProps<T>) => {
//   const { array, Component } = props;
//   return (
//     <StyledList {...props}>
//       {array?.map((item) => (
//         <Component item={item} key={item.id} />
//       ))}
//     </StyledList>
//   );
// };
// interface ListProps<T> {
//   array: T[];
//   Component: React.ComponentType<{ item: T }>;
// }

export const List = <T>({ array, Component }: ListProps<T>) => {
  // Получаем тип элемента списка
  type ListItemType = typeof array[number];

  return (
    <ul>
      {array.map((item, index) => (
        <li key={index}>
          <Component item={item} />
        </li>
      ))}
    </ul>
  );
};

// export default List;
