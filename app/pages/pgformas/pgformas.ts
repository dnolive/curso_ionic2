import { Component } from '@angular/core';
import { NavController, Modal, Alert, Toast } from 'ionic-angular';
import { PgFormasDao } from '../../dao/pgformas-dao';
import { PgForma } from '../../models/pgforma';
import { PgFormasModalPage } from '../pgformas/pgformas-modal';

@Component({
  templateUrl: 'build/pages/pgformas/pgformas.html',
})

export class PgFormasPage {

  private lista: Array<PgForma>;

  constructor(private nav: NavController) {
    this.retornar();
  }

  retornar(callBack?) : void {
    new PgFormasDao().retornar((dados) => {
      this.lista = dados;
    });
  }

  incluir(): void {
    let modal = Modal.create(PgFormasModalPage);

    modal.onDismiss((dados) => {
      if ( ! dados ) {
        return;
      }
      new PgFormasDao().incluir(dados, (dados) => {
        this.mensagem("Inclusão confirmada");
        this.lista.push(dados);
      });
    });

    this.nav.present(modal);
  }

  alterar(pgforma) : void {
    let modal = Modal.create(PgFormasModalPage, {param: pgforma});

    modal.onDismiss((dados) => {
      if (dados) {
        new PgFormasDao().alterar(dados, () => {
          this.mensagem("Alteração confirmada");
        })
      }
    });

    this.nav.present(modal);
  }

  excluir(pgforma) : void {
    let msg = Alert.create({
      title: "Exclusão",
      message: "Confirma a exclusão da forma de pagamento "+pgforma.nome+"?",
      buttons: [{
        text: "Sim",
        handler: () => {
          new PgFormasDao().excluir(pgforma, () => {
            this.mensagem("Exclusão confirmada");
            let pos = this.lista.indexOf(pgforma);
            this.lista.splice(pos, 1);
          });
        }
      }, {
        text: "Não"
      }]
    });
    this.nav.present(msg);
  }

  mensagem(msg: string): void {
    let toast = Toast.create({
      message : msg,
      duration: 3000,
      position: "bottom"
    });
    this.nav.present(toast);
  }
}
