import 'reflect-metadata';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('user')
export default class UserModel {
    @PrimaryGeneratedColumn("increment")
    private _id: number;
    @Column('varchar', {nullable: false, length: 40})
    private _nome: string;
    @Column('varchar', {nullable: false, length: 60})
    private _sobreNome: string;
    @Column('varchar', {nullable: false, length: 50})
    private _email: string;
    @Column()
    private _password: string;


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

    get sobreNome(): string {
        return this._sobreNome;
    }

    set sobreNome(value: string) {
        this._sobreNome = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}
