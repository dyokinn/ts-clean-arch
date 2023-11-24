import UserDTO from "../../data/DTO/User/UserDTO";

// namespace -> organization only
export namespace Authentication {
    export type Params = {
      email: string;
      password: string;
    };
  
  }

export interface IAuthentication {
  auth(params: Authentication.Params): Promise<UserDTO>;
}

