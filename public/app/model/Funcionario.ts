import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('funcionario')
export default class Funcionario {
    @PrimaryGeneratedColumn("increment")
    private _id: number;
    @Column({name: 'nome_cl', nullable: false, length: 40})
    private _nome: string;
    @Column({name: 'cpf_cl', nullable: false, length: 20, unique: true})
    private _cpf: string;
    @Column({name: 'rg_cl', nullable: false, length: 20, unique: true})
    private _rg: string;
    @Column({name: 'telefone_cl', nullable: false, length: 20})
    private _telefone: string;
    @Column()
    private _excluir: boolean;
    @Column()
    private _idCrypt: string;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    get rg(): string {
        return this._rg;
    }

    set rg(value: string) {
        this._rg = value;
    }

    get telefone(): string {
        return this._telefone;
    }

    set telefone(value: string) {
        this._telefone = value;
    }

    get excluir(): boolean {
        return this._excluir;
    }

    set excluir(value: boolean) {
        this._excluir = value;
    }

    get idCrypt(): string {
        return this._idCrypt;
    }

    set idCrypt(value: string) {
        this._idCrypt = value;
    }
}