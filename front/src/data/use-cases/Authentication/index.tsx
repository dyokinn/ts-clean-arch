import { Authentication, IAuthentication } from "../../../domain/use-cases/authentication";
import UserDTO from "../../DTO/User/UserDTO";

export class RemoteAuthentication implements IAuthentication {
    auth(params: Authentication.Params): Promise<UserDTO> {
        throw new Error("Method not implemented.");
    }

}