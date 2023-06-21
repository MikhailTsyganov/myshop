import { FC } from "react";
import { AuthFormProps } from ".";
import { StyledAuthForm } from "./AuthForm.styles";
import { Header, Main, Footer } from "containers";

export const AuthForm: FC<AuthFormProps> = (props) => {
  return (
    <StyledAuthForm {...props}>
      <Header />
      <Main>
        <div className="authWrapper">{props.children}</div>
      </Main>
      <Footer />
    </StyledAuthForm>
  );
};
