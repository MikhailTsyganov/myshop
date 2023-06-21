import { FC, useState } from "react";
import { LoginProps } from ".";
import { StyledLogin } from "./Login.styles";
import { ButtonStandart, Input } from "components";
import { useAppDispatch } from "redux/hooks/hooks";
import { login } from "redux/auth/auth-operations";
import { AuthForm } from "pages/AuthForm";

export const Login: FC<LoginProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <AuthForm>
      <StyledLogin {...props}>
        <h1>Авторизация</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonStandart type="submit" primary>
            Войти
          </ButtonStandart>
        </form>
      </StyledLogin>
    </AuthForm>
  );
};
