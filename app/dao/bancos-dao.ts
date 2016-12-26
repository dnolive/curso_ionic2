import { DAO } from "../bases/bases";
import { IRepositorio } from "../bases/bases";
import { Banco } from "../models/banco";

export class BancosDao implements IRepositorio<Banco> {

  constructor () {
    this.construir();
  }

  construir(callBack?) : void {
    let sql =
    "CREATE TABLE IF NOT EXISTS banco(id INTEGER PRIMARY KEY AUTOINCREMENT, "+
    "nome TEXT, agencia TEXT, saldoInicial REAL, saldoAtual REAL)";

    DAO.execute(sql, null, (dados) => {
    });
  }

  retornar(callBack?) : void {
    let sql = "SELECT * FROM banco";

    DAO.execute(sql, null, (dados) => {
      let lista: Array<Banco> = [];

      for (let i = 0; i < dados.res.rows.length; i++) {
        let banco: Banco = new Banco();

        banco.id           = dados.res.rows.item(i).id;
        banco.nome         = dados.res.rows.item(i).nome;
        banco.agencia      = dados.res.rows.item(i).agencia;
        banco.saldoInicial = dados.res.rows.item(i).saldoInicial;
        banco.saldoAtual   = dados.res.rows.item(i).saldoAtual;

        lista.push(banco);
      }

      callBack(lista);
    });
  }

  incluir(banco, callBack) : void {
    let sql =
    "INSERT INTO banco " +
    "(nome, agencia, saldoInicial, saldoAtual) " +
    "VALUES (?,?,?,?)";


    DAO.execute(sql, [banco.nome, banco.agencia,
      banco.saldoInicial, banco.saldoAtual], (dados) => {
      callBack(dados);
    });
  }

  alterar(banco, callBack) : void {
    let sql =
    "UPDATE banco " +
    "SET nome = ?, agencia = ?, saldoInicial = ?, saldoAtual = ? "+
    "WHERE id = ?";

    DAO.execute(sql,  [banco.nome, banco.agencia,
      banco.saldoInicial, banco.saldoAtual, banco.id], (dados) => {
      callBack(dados);
    });
  }

  excluir(banco, callBack) : void {
    let sql =
    "DELETE FROM banco WHERE id = ?";

    DAO.execute(sql, [banco.id], (dados) => {
      callBack(dados);
    });
  }
}
