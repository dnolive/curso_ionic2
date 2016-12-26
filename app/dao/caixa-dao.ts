import { DAO } from "../bases/bases";
import { IRepositorio } from "../bases/bases";
import { DateFormat } from "../bases/utils";
import { Caixa } from "../models/caixa";

export class CaixaDao implements IRepositorio<Caixa> {

  constructor () {
    this.construir();
  }

  construir(callBack?) : void {
    let sql =
    "CREATE TABLE IF NOT EXISTS caixa" +
    "(id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT, tipo TEXT, "+
    "origem TEXT, movimitem_id INTEGER, contacaixa_id INTEGER, "+
    "valor REAL, historico TEXT, obs TEXT)";

    DAO.execute(sql);
  }

  retornar(callBack?) : void {
    let sql = "SELECT * FROM caixa";

    DAO.execute(sql, null, (dados) => {
      let lista: Array<Caixa> = [];

      for (let i = 0; i < dados.res.rows.length; i++) {
        let caixa: Caixa = dados.res.rows.item(i);
        lista.push(caixa);
      }

      callBack(lista);
    })
  }

  incluir(caixa: Caixa, callBack) : void {
    let sql =
    "INSERT INTO caixa " +
    "(data, tipo, origem, movimitem_id, "+
    "contacaixa_id, valor, historico, obs) "+
    "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    let data: any = new Date(caixa.data);
    data = new DateFormat(data, 'm-d-Y');
    console.log(data);

    DAO.execute(sql, [data, caixa.tipo, caixa.origem, caixa.movimitem,
      caixa.conta, caixa.valor, caixa.historico, caixa.obs], (dados) => {
      caixa.id = dados.res.insertId;
      callBack(caixa);
    });
  }

  alterar(caixa: Caixa, callBack) : void {
    let sql =
    "UPDATE caixa " +
    "SET data = ?, tipo = ?, origem = ?, movimitem_id = ?, "+
    "contacaixa_id = ?, valor = ?, historico = ?, obs = ? "+
    "WHERE id = ?";

    console.log(caixa);

    DAO.execute(sql, [caixa.data, caixa.tipo, caixa.origem,
      caixa.movimitem, caixa.conta, caixa.valor, caixa.historico,
      caixa.obs, caixa.id], (dados) => {
      callBack(dados);
    });
  }

  excluir(caixa: Caixa, callBack) : void {
    let sql =
    "DELETE FROM caixa " +
    "WHERE id = ?";

    DAO.execute(sql, [caixa.id], (dados) => {
      callBack(dados);
    });
  }
}
