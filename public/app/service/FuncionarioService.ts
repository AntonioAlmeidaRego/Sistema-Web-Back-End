import FuncionarioModelRepository from "../repository/FuncionarioRepository";
import Funcionario from "../model/Funcionario";

class FuncionarioService {
    repository = FuncionarioModelRepository;

    public save(entity: Funcionario){
        this.repository.save(entity);
    }

    public findOne = async (id: number)=>{
        return await this.repository.findOne(new Funcionario(), id);
    }

    public findAll = async ()=>{
        return await this.repository.findAll(new Funcionario());
    }
}

export default new FuncionarioService();