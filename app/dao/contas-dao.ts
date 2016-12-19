export class ContasDao {

  lista: Array<any>;

  constructor () {
    this.lista = [{descricao: "teste"},{descricao: "teste2"}, {descricao: "teste3"}];
  }

  listar() : Array<any> {
    return this.lista;
  }

  incluir(obj) : void {

  }

  alterar(obj) : void {

  }

  excluir(obj) : void {

  }

}
