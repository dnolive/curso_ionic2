import { DAO } from "../bases/dao";
import { Armazem } from "../bases/armazem";
import { Conta } from "../models/conta";

export class Contas extends Armazem<Conta> {

  constructor () {
    super();
    this.inicializar();
  }

  protected inicializar() : void {
    let sql =
    "CREATE TABLE IF NOT EXISTS " +
    "conta(id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT)";

    DAO.execute(sql, null, (dados) => {});
  }

  retornar(callBack) : void {
    let sql = "SELECT * FROM conta";

    DAO.execute(sql, null, (dados) => {
      let lista: Array<Conta> = [];

      for (let i = 0; i < dados.res.rows.length; i++) {
        let conta: Conta = new Conta();

        conta.id   = dados.res.rows.item(i).id;
        conta.nome = dados.res.rows.item(i).descricao;

        lista.push(conta);
      }

      callBack(lista);
    })
  }

  incluir(obj, callBack) : void {
    let sql =
    "INSERT INTO conta " +
    "(descricao) VALUES (?)";

    DAO.execute(sql, [obj.nome], (conta) => {
      obj.id = conta.res.insertId;
      callBack(obj);
    });
  }

  alterar(obj, callBack) : void {
    let sql =
    "UPDATE conta " +
    "SET descricao = ? "+
    "WHERE id = ?";

    DAO.execute(sql, [obj.nome, obj.id], (obj) => {
      callBack(obj);
    });
  }

  excluir(obj, callBack) : void {
    let sql =
    "DELETE FROM conta " +
    "WHERE id = ?";

    DAO.execute(sql, [obj.id], (conta) => {
      callBack(conta);
    });
  }
}
