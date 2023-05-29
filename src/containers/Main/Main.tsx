import { FC } from "react";
import { MainProps } from ".";

import { StyledMain } from "./Main.styles";
import { Container } from "components";
// import { Basket } from "./Basket/index";
// import { Login } from "containers/AuthFormOld/Login";
// import { Registration } from "containers/AuthFormOld/Registration";
// import { AuthForm } from "containers/AuthForm";
// import { Homepage } from "./Homepage/index";
// import { ItemDetail } from "./ItemDetail";

import {
  // Route,
  //  Routes,
  Outlet,
} from "react-router-dom";

export const Main: FC<MainProps> = (props) => {
  return (
    <StyledMain {...props}>
      <Container>
        {/* <Outlet /> */}
        {props.children}
        {/* <Routes> */}
        {/* <Route path="/" element={<Homepage />}></Route> */}
        {/* <Route path="/goods/:article" element={<ItemDetail />}></Route> */}

        {/* <Route path="/basket" element={<Basket />}></Route> */}
        {/* <Route
            path="/login"
            element={
              <AuthForm>
                <Login />
              </AuthForm>
            }
          ></Route> */}
        {/* <Route
            path="/registration"
            element={
              <AuthForm>
                <Registration />
              </AuthForm>
            }
          ></Route> */}
        {/* <Route path="/login" element={<Login />}></Route> */}
        {/* <Route path="/registration" element={<Registration />}></Route> */}
        {/* </Routes> */}
      </Container>
    </StyledMain>
  );
};
