
import 'reflect-metadata';
import {PrimaryGeneratedColumn, Entity, Column} from "typeorm";

@Entity('veiculo')
export default class VeiculoModel {
    @PrimaryGeneratedColumn()
    private _id: number;
    @Column()
    private _marca: string;
    @Column()
    private _valor: string;
    @Column()
    private _modelo: string;
    @Column()
    private _anoModelo: string;
    @Column()
    private _compostivel: string;
    @Column()
    private _codigoFipe: string;
    @Column()
    private _mesReferencia: string;
    @Column()
    private _tipoVeiculo: string;
    @Column()
    private _siglaCombustivel: string;

    constructor() {
        this._id = 0;
        this._marca = "";
        this._valor = "";
        this._modelo = "";
        this._anoModelo = "";
        this._compostivel = "";
        this._codigoFipe = "";
        this._mesReferencia = "";
        this._tipoVeiculo = "";
        this._siglaCombustivel = "";
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get marca(): string {
        return this._marca;
    }

    set marca(value: string) {
        this._marca = value;
    }

    get valor(): string{
        return this._valor;
    }

    set valor(value: string) {
        this._valor = value;
    }

    get modelo(): string {
        return this._modelo;
    }

    set modelo(value: string) {
        this._modelo = value;
    }

    get anoModelo(): string {
        return this._anoModelo;
    }

    set anoModelo(value: string) {
        this._anoModelo = value;
    }

    get compostivel(): string {
        return this._compostivel;
    }

    set compostivel(value: string) {
        this._compostivel = value;
    }

    get codigoFipe(): string {
        return this._codigoFipe;
    }

    set codigoFipe(value: string) {
        this._codigoFipe = value;
    }

    get mesReferencia(): string {
        return this._mesReferencia;
    }

    set mesReferencia(value: string) {
        this._mesReferencia = value;
    }

    get tipoVeiculo(): string {
        return this._tipoVeiculo;
    }

    set tipoVeiculo(value: string) {
        this._tipoVeiculo = value;
    }

    get siglaCombustivel(): string {
        return this._siglaCombustivel;
    }

    set siglaCombustivel(value: string) {
        this._siglaCombustivel = value;
    }
}
