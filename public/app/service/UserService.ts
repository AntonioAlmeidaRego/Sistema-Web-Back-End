import UserModelRepository from "../repository/UserModelRepository";
import UserModel from "../model/UserModel";

class UserService {
    repository = UserModelRepository;

    public save(entity: UserModel){
        this.repository.save(entity);
    }

    public findOne = async (id: number)=>{
        return this.repository.findOne(new UserModel(), id);
    }

    public findAll = async ()=>{
        return this.repository.findAll(new UserModel());
    }
}

export default new UserService();
