import { Modelo } from "../bases/modelo";

export class Conta extends Modelo {

  private _nome: string;
  private _tipo: string;

  constructor() {
    super();
    this._nome = "";
    this._tipo = "D";
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }

  public get tipo(): string {
    return this._tipo;
  }
  public set tipo(tipo: string) {
    this._tipo = tipo;
  }
}
