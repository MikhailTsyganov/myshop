export interface WrapperStandartProps {
  id?: string;
  display?: "flex";
  children?: React.ReactNode[] | React.ReactNode;
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
  alignItems?: "start" | "center" | "end";
  alignContent?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "stretch";
  flexDirection?: "row" | "column";
  bgc?: string; // TODO: delete
  flexWrap?: "wrap" | "no-wrap";
}
