import { Modelo } from "../bases/bases";

export class Banco extends Modelo {

  private _nome       : string;
  private _agencia    : string;
  public saldoInicial : number;
  public saldoAtual   : number;

  constructor() {
    super();
    this.nome         = "";
    this.agencia      = "";
    this.saldoInicial = 0.0;
    this.saldoAtual   = 0.0;
  }

  public get nome() : string {
    return this._nome;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }

  public get agencia() : string {
    return this._agencia;
  }
  public set agencia(agencia: string) {
    this._agencia = agencia;
  }

}
