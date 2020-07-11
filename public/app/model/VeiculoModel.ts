export default class VeiculoModel {

    private _id: string | number;
    private _marca: string;
    private _valor: string | number;
    private _modelo: string;
    private _anoModelo: string;
    private _compostivel: string;
    private _codigoFipe: string;
    private _mesReferencia: string;
    private _tipoVeiculo: string;
    private _siglaCombustivel: string;

    constructor() {
        this._id = "";
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

    get id(): string | number {
        return this._id;
    }

    set id(value: string | number) {
        this._id = value;
    }

    get marca(): string {
        return this._marca;
    }

    set marca(value: string) {
        this._marca = value;
    }

    get valor(): string | number {
        return this._valor;
    }

    set valor(value: string | number) {
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
