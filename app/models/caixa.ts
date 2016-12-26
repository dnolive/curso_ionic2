import { Modelo } from "../bases/bases";

export class Caixa extends Modelo {

  private _data: string;
  private _tipo: string;
  private _origem: string;
  private _movimitem: number;
  private _conta: number;
  private _valor: number;
  private _historico: string;
  private _obs: string;

  constructor() {
    super();
    this._data = (new Date()).toDateString();
    this._tipo = "D";
    this._origem = "CXA";
    this._movimitem = 0;
    this._conta = 0;
    this._valor = 0.0;
    this._historico = "";
    this._obs = "";
  }

  public get data() : string {
    return this._data;
  }
  public set nome(data: string) {
    this._data = data;
  }

  public get tipo() : string {
    return this._tipo;
  }
  public set tipo(tipo: string) {
    this._tipo = tipo;
  }

  public get origem() : string {
    return this._origem;
  }
  public set origem(origem: string) {
    this._origem = origem;
  }

  public get movimitem() : number {
    return this._movimitem;
  }
  public set movimitem(movimitem: number) {
    this._movimitem = movimitem;
  }

  public get conta() : number {
    return this._conta;
  }
  public set conta(conta: number) {
    this._conta = conta;
  }

  public get valor() : number {
    return this._valor;
  }
  public set valor(valor: number) {
    this._valor = valor;
  }

  public get historico() : string {
    return this._historico;
  }
  public set historico(historico: string) {
    this._historico = historico;
  }

  public get obs() : string {
    return this._obs;
  }
  public set obs(obs: string) {
    this._obs = obs;
  }

}
