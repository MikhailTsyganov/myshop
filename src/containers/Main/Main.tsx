import { FC } from "react";
import { MainProps } from ".";

import { StyledMain } from "./Main.styles";
import { Container } from "components";
import { Basket } from "./Basket/index";
import { Homepage } from "./Homepage/index";

import { Route, Routes, Router } from "react-router-dom";

export const Main: FC<MainProps> = (props) => {
  return (
    <StyledMain {...props}>
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
      </Container>
    </StyledMain>
  );
};

// You should be using react router, then you'll be able to redirect the root path to where you want:
// <Redirect from='/' to='/api' />
// Or, if you want the sub-path without redirection, you can use basename like:
// <Router basename={'/api'}>
//   <Route path="/" component={Api} />
// </Router
// Now, when you start the project, it will serve from your_domain:port/api
// If you don't use react router, then you may set homepage in package.json like:
// "homepage": "/api"
