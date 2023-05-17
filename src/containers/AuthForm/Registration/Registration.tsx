import { FC, useState } from "react";
import { RegistrationProps } from ".";
import { StyledRegistration } from "./Registration.styles";
import { ButtonStandart, Input } from "components";
import { useAppDispatch } from "redux/hooks/hooks";
import { registration } from "redux/auth/auth-operations";

export const Registration: FC<RegistrationProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registration({ email, password }));
    setEmail("");
    setPassword("");
  };
  return (
    <StyledRegistration {...props}>
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
        <ButtonStandart type="submit">Зарегистрироваться</ButtonStandart>
      </form>
    </StyledRegistration>
  );
};
