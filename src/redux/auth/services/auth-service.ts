import $api from "../http";
import { AxiosResponse } from "axios";

interface IUser {
  id: string;
  email: string;
  isActivated: boolean;
}

interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>("/login", { email, password });
  }

  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>("/registration", { email, password });
  }

  static async logout(): Promise<void> {
    $api.post<IAuthResponse>("/logout");
  }
}
