import {VeiculoModel} from "../model/VeiculoModel";
import VeiculoModelRepository from "../repository/VeiculoModelRepository";

export class VeiculoService{
    repository = VeiculoModelRepository;

    // @ts-ignore
    public save(entity: VeiculoModel){
        this.repository.save(entity);
    }
    // @ts-ignore
    public findOne = async(id: number) => {
        await VeiculoModelRepository.findOne(id);
    }
}
