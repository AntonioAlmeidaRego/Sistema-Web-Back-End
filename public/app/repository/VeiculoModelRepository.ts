import {Repository} from "./Repository";
import {VeiculoModel} from "../model/VeiculoModel";

class VeiculoModelRepository{
   public repository: Repository<VeiculoModel> = new Repository<VeiculoModel>()
}

export default new VeiculoModelRepository().repository;
