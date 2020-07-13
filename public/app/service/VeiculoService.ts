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
        return await this.repository.findOne(new VeiculoModel(), id);
    }

    public async findAll(){
        return await this.repository.findAll(new VeiculoModel());
    }
}

export default new VeiculoService();
