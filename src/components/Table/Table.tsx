import { FC } from "react";
import { TableProps } from ".";
import { StyledTable } from "./Table.styles";

export const Table: FC<TableProps> = (props) => {
  const { title, rows } = props;

  return (
    <StyledTable {...props}>
      <caption>{title}</caption>
      <tbody>
        {rows.map((item) => {
          const { rowName, value, rowId } = item;
          return (
            <tr key={rowId}>
              <th>{rowName}</th>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};
