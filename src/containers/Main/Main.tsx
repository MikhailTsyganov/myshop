import { FC } from "react";
import { MainProps } from ".";

import { StyledMain } from "./Main.styles";
import { Container } from "components";
import { Basket } from "./Basket/index";
import { Homepage } from "./Homepage/index";

import { Route, Routes } from "react-router-dom";

export const Main: FC<MainProps> = (props) => {
  return (
    <StyledMain {...props}>
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>

        {/* {true && <Homepage />}
        {false && <Basket />} */}
      </Container>
    </StyledMain>
  );
};
