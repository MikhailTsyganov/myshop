import $api from "../http";
import { AxiosResponse } from "axios";

interface IUser {
  id: string;
  email: string;
  isActivated: boolean;
}

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>("/users");
  }
}
