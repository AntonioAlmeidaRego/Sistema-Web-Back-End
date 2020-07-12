import {VeiculoService} from "../service/VeiculoService";
import {VeiculoModel} from "../model/VeiculoModel";

export default class VeiculoController {
    private service: VeiculoService = new VeiculoService();


    public save(entity: VeiculoModel){
        this.service.save(entity);
    }
}
