import { Storage, SqlStorage } from "ionic-angular";

export class DAO {

  static execute(script, params, callBack) : void {
    let storage = new Storage (SqlStorage);
    if (params) {
      storage.query(script, params).then( (data) => {
        callBack(data);
        console.log("Script executou com sucesso.");
      }, (error) => {
        console.log("Script falhou.\n"+
        JSON.stringify(error.err));
      })
    } else {
      storage.query(script).then( (data) => {
        callBack(data);
      }, (error) => {
        console.log("Script falhou.\n"+
        JSON.stringify(error.err));
      })
    }
  }

}
