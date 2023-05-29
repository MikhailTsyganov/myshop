import { FC } from "react";
import { AuthFormProps } from ".";
import { StyledAuthForm } from "./AuthForm.styles";
import { Header, Main, Footer } from "containers";

export const AuthForm: FC<AuthFormProps> = (props) => {
  return (
    <>
      <Header />
      <Main>
        <StyledAuthForm {...props}>{props.children}</StyledAuthForm>
      </Main>
      <Footer />
    </>
  );
};
