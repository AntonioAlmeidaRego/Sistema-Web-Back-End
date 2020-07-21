import {Repository} from "./Repository";
import Funcionario from "../model/Funcionario";

class FuncionarioRepository {
    public repository: Repository<Funcionario> = new Repository<Funcionario>();
}

export default new FuncionarioRepository().repository;
