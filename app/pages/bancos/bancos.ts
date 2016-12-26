import { Component } from '@angular/core';
import { NavController, ViewController, Modal, Alert, Toast, Loading } from 'ionic-angular';
import { BancosDao } from '../../dao/bancos-dao';
import { BancosModalPage } from '../bancos/bancos-modal';
import { Banco } from '../../models/banco';

@Component({
  templateUrl: 'build/pages/bancos/bancos.html',
})

export class BancosPage {

  private lista: Array<Banco>;

  constructor(private nav: NavController, private view: ViewController) {
    this.retornar(null);
  }

  retornar(callBack) : void {
    let loading = Loading.create({
      content: "Carregando"
    });
    this.nav.present(loading);

    new BancosDao().retornar((bancos) => {
      this.lista = bancos;
      loading.dismiss();
    });
  }

  incluir(): void {
    let modal = Modal.create(BancosModalPage);
    modal.onDismiss( (dados) => {
      if ( ! dados ) {
        return;
      }

      new BancosDao().incluir(dados, (banco) => {
        this.mensagem("Inclusão confirmada");
        this.lista.push(dados);
      });
    });

    this.nav.present(modal);
  }

  alterar(banco) : void {
    let modal = Modal.create(BancosModalPage, {param: banco});

    modal.onDismiss((dados) => {
      if ( ! dados ) {
        return;
      };
      new BancosDao().alterar(dados, (banco) => {
        this.mensagem("Alteração confirmada");
      });
    });

    this.nav.present(modal);
  }

  excluir(banco) : void {
    let msg = Alert.create({
      title: "Exclusão",
      message: "Confirma a exclusão do banco "+banco.nome+"?",
      buttons: [{
        text: "Sim",
        handler: () => {
          new BancosDao().excluir(banco, (dados) => {
            this.mensagem("Exclusão confirmada");
            let pos = this.lista.indexOf(dados);
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
