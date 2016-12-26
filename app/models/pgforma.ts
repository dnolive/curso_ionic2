import { Modelo } from "../bases/bases";

export class PgForma extends Modelo {

  private _nome: string;
  private _integrar: string;
  private _banco: number;

  constructor() {
    super();
    this._nome = "";
    this._integrar = "N";
    this._banco = 0;
  }

  public get nome() : string {
    return this._nome;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }

  public get integrarBanco() : string {
    return this._integrar;
  }
  public set integrarBanco(integrar: string) {
    this._integrar = integrar;
  }

  public get banco() : number {
    return this._banco;
  }
  public set banco(banco: number) {
    this._banco = banco;
  }

}
