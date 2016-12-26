import { DAO } from "../bases/bases";
import { IRepositorio } from "../bases/bases";
import { PgForma } from "../models/pgforma";

export class PgFormasDao implements IRepositorio<PgForma> {

  constructor () {
    this.construir();
  }

  construir(callBack?) : void {
    let sql =
    "CREATE TABLE IF NOT EXISTS pgforma " +
    "(id INTEGER PRIMARY KEY AUTOINCREMENT, "+
    "nome TEXT, integrarBanco TEXT, " +
    "banco INTEGER)";

    DAO.execute(sql, null, (dados) => {});
  }

  retornar(callBack?) : void {
    let sql = "SELECT * FROM pgforma";

    DAO.execute(sql, null, (dados) => {
      let lista: Array<PgForma> = [];

      for (let i = 0; i < dados.res.rows.length; i++) {
        let pgforma: PgForma = dados.res.rows.item(i);
        lista.push(pgforma);
      }

      callBack(lista);
    })
  }

  incluir(pgforma, callBack) : void {
    let sql =
    "INSERT INTO pgforma " +
    "(nome, integrarBanco, banco) VALUES (?,?,?)";

    DAO.execute(sql, [pgforma.nome,
      pgforma.integrarBanco, pgforma.banco], (dados) => {
      pgforma.id = dados.res.insertId;
      callBack(pgforma);
    });
  }

  alterar(pgforma, callBack) : void {
    let sql =
    "UPDATE pgforma " +
    "SET nome = ?, integrarBanco = ?, banco = ? "+
    "WHERE id = ?";

    DAO.execute(sql, [pgforma.nome,
      pgforma.integrarBanco, pgforma.banco, pgforma.id], (dados) => {
      callBack(dados);
    });
  }

  excluir(pgforma, callBack) : void {
    let sql =
    "DELETE FROM pgforma " +
    "WHERE id = ?";

    DAO.execute(sql, [pgforma.id], (dados) => {
      callBack(dados);
    });
  }
}
