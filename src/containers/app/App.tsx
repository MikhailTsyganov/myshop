import React, { useState } from "react";
import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";
import { Sidebar } from "../Sidebar";
import { Backdrop } from "components";

function App() {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const onToggleSidebar = () => {
    setIsOpenedSidebar((prevState) => !prevState);
    setShowBackdrop((prevState) => !prevState);
  };

  return (
    <>
      <Header height="124px" onOpenSidebar={onToggleSidebar} />
      <Main />
      <Footer />

      {showBackdrop && (
        <Backdrop onCloseSidebar={onToggleSidebar}>
          {isOpenedSidebar && <Sidebar onCloseSidebar={onToggleSidebar} />}
        </Backdrop>
      )}
    </>
  );
}

export default App;
