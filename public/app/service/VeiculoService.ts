import VeiculoModel from "../model/VeiculoModel";
import VeiculoModelRepository from "../repository/VeiculoModelRepository";

class VeiculoService{
    repository = VeiculoModelRepository;

    // @ts-ignore
    public save(entity: VeiculoModel){
        this.repository.save(entity);
    }
    // @ts-ignore
    public findOne = async(id: number) => {
        return await this.repository.findOne("VeiculoModel", id);
    }

    public findAll(){
        return this.repository.findAll("VeiculoModel");
    }
}

export default new VeiculoService();
