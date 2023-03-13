import { FC } from "react";
import { SidebarProps } from ".";
import { goods } from "../../api/goods";
import s from "./Sidebar.module.css";

export const Sidebar: FC<SidebarProps> = ({ onCloseSidebar }) => {
  return (
    <div className={s.sidebar}>
      <ul>
        {goods.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <button className={s.closeButton} onClick={onCloseSidebar}></button>
    </div>
  );
};
