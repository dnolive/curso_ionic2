import { Component } from '@angular/core';
import { NavController, Modal, Alert, Toast } from 'ionic-angular';
import { CaixaDao } from '../../dao/caixa-dao';
import { Caixa } from '../../models/caixa';
import { CaixaModalPage } from '../caixa/caixa-modal';

@Component({
  templateUrl: 'build/pages/caixa/caixa.html',
})

export class CaixaPage {

  private lista: Array<Caixa>;

  constructor(private nav: NavController) {
    this.preparar();
  }

  preparar(callBack?) : void {
    new CaixaDao().retornar((dados) => {
      this.lista = dados;
    });
  }

  incluir(): void {
    let modal = Modal.create(CaixaModalPage);

    modal.onDismiss((dados) => {
      if ( ! dados ) {
        return;
      }
      new CaixaDao().incluir(dados, (dados) => {
        this.mensagem("Inclusão confirmada");
        this.lista.push(dados);
      });
    });

    this.nav.present(modal);
  }

  alterar(caixa) : void {
    let modal = Modal.create(CaixaModalPage, {param: caixa});

    modal.onDismiss((dados) => {
      if (dados) {
        new CaixaDao().alterar(dados, () => {
          this.mensagem("Alteração confirmada");
        })
      }
    });

    this.nav.present(modal);
  }

  excluir(caixa) : void {
    let msg = Alert.create({
      title: "Exclusão",
      message: "Confirma a exclusão do caixa "+caixa.id+"?",
      buttons: [{
        text: "Sim",
        handler: () => {
          new CaixaDao().excluir(caixa, () => {
            this.mensagem("Exclusão confirmada");
            let pos = this.lista.indexOf(caixa);
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
