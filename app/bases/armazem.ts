export abstract class Armazem<T> {

  constructor() {

  }

  protected abstract inicializar()    : void;
  abstract retornar(callBack)         : void;
  abstract incluir(obj: T, callBack)  : void;
  abstract alterar(obj: T, callBack)  : void;
  abstract excluir(obj: T, callBack)  : void;
}
