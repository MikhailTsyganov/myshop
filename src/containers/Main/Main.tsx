import { FC } from "react";
import { MainProps } from ".";

import { StyledMain } from "./Main.styles";
import { Container } from "components";
import { Basket } from "./Basket/index";
import { Homepage } from "./Homepage/index";

export const Main: FC<MainProps> = (props) => {
  return (
    <StyledMain {...props}>
      <Container>
        {true && <Homepage />}
        {false && <Basket />}
      </Container>
    </StyledMain>
  );
};
