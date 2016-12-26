import { DAO } from "../bases/bases";
import { IRepositorio } from "../bases/bases";
import { Conta } from "../models/conta";

export class ContasDao implements IRepositorio<Conta> {

  constructor () {
    this.construir();
  }

  construir(callBack?) : void {
    let sql =
    "CREATE TABLE IF NOT EXISTS conta" +
    "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, tipo TEXT)";

    DAO.execute(sql, null, (dados) => {});
  }

  retornar(callBack?) : void {
    let sql = "SELECT * FROM conta";

    DAO.execute(sql, null, (dados) => {
      let lista: Array<Conta> = [];

      for (let i = 0; i < dados.res.rows.length; i++) {
        let conta: Conta = dados.res.rows.item(i);
        lista.push(conta);
      }

      callBack(lista);
    })
  }

  incluir(conta, callBack) : void {
    let sql =
    "INSERT INTO conta " +
    "(nome, tipo) VALUES (?,?)";

    DAO.execute(sql, [conta.nome, conta.tipo], (dados) => {
      conta.id = dados.res.insertId;
      callBack(conta);
    });
  }

  alterar(conta, callBack) : void {
    let sql =
    "UPDATE conta " +
    "SET nome = ?, tipo = ? "+
    "WHERE id = ?";

    DAO.execute(sql, [conta.nome,
      conta.tipo, conta.id], (dados) => {
      callBack(dados);
    });
  }

  excluir(conta, callBack) : void {
    let sql =
    "DELETE FROM conta " +
    "WHERE id = ?";

    DAO.execute(sql, [conta.id], (dados) => {
      callBack(dados);
    });
  }
}
