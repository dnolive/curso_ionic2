import { Storage, SqlStorage } from "ionic-angular";

export class Modelo {

  private _id: number;

  constructor() {
    this._id = 0;
  }

  public get id(): number{
    return this._id;
  }
  public set id(id: number){
    this._id = id;
  }

}

export class DAO {

  static execute(script: string, params?: Array<any>, callBack?: Function) : void {
    let storage = new Storage (SqlStorage);
    storage.query(script, params).then( (dados) => {
      console.log("DAO executou com sucesso.");
      if (callBack) {
        callBack(dados);
      }
    }, (error) => {
      console.log("DAO falhou.\n"+
      JSON.stringify(error.err));
    });
  }

}

export interface IRepositorio<T>{
  construir(callBack?: Function)      : void;
  retornar(callBack?: Function)       : void;
  incluir(obj: T, callBack: Function) : void;
  alterar(obj: T, callBack: Function) : void;
  excluir(obj: T, callBack: Function) : void;
}
