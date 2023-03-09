import React, { useState } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

import "./App.css";

function App() {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState<boolean>(false);

  const onOpenBurger = () => {
    setIsOpenedSidebar(!isOpenedSidebar);
  };

  return (
    <>
      <Header height="100px" onOpenSidebar={onOpenBurger} />
      {isOpenedSidebar && <Sidebar />}
    </>
  );
}

export default App;
