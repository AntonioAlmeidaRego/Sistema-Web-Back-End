import {Repository} from "./Repository";
import UserModel from "../model/UserModel";

class UserModelRepository {
    public repository: Repository<UserModel> = new Repository<UserModel>();
}

export default new UserModelRepository().repository;
