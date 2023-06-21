import { FC, useState } from "react";
import { RegistrationProps } from ".";
import { StyledRegistration } from "./Registration.styles";
import { ButtonStandart, Input, WrapperStandart } from "components";
import { useAppDispatch } from "redux/hooks/hooks";
import { registration } from "redux/auth/auth-operations";
import { AuthForm } from "pages/AuthForm";

export const Registration: FC<RegistrationProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registration({ email, password }));
    setEmail("");
    setPassword("");
  };
  return (
    <AuthForm>
      <StyledRegistration {...props}>
        <h1>Регистрация</h1>
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
          <ButtonStandart type="submit" primary disabled={!checkbox}>
            Зарегистрироваться
          </ButtonStandart>
          <WrapperStandart
            display="flex"
            alignItems="start"
            id="authCheckboxWrapper"
          >
            <Input
              id="authCheckbox"
              type="checkbox"
              checked={checkbox}
              onChange={(e) => setCheckbox(!checkbox)}
            />
            <label htmlFor="authCheckbox">
              Соглашаюсь с правилами пользования торговой площадкой и возврата
            </label>
          </WrapperStandart>
        </form>
      </StyledRegistration>
    </AuthForm>
  );
};
