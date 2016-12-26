import { Component } from '@angular/core';
import { NavController, ViewController, Modal, Alert, Toast } from 'ionic-angular';
import { ContasDao } from '../../dao/contas-dao';
import { ContasModalPage } from '../contas/contas-modal';

@Component({
  templateUrl: 'build/pages/contas/contas.html',
})

export class ContasPage {

  private lista: Array<any>;

  constructor(private nav: NavController, private view: ViewController) {
    new ContasDao().retornar((dados) => {
      this.lista = dados;
    });
  }

  incluir(): void {
    let modal = Modal.create(ContasModalPage);

    modal.onDismiss((dados) => {
      if ( ! dados ) {
        return;
      }
      new ContasDao().incluir(dados, (dados) => {
        this.mensagem("Inclusão confirmada");
        this.lista.push(dados);
      });
    });

    this.nav.present(modal);
  }

  alterar(conta) : void {
    let modal = Modal.create(ContasModalPage, {param: conta});

    modal.onDismiss((dados) => {
      if (dados) {
        new ContasDao().alterar(dados, () => {
          this.mensagem("Alteração confirmada");
        })
      }
    });

    this.nav.present(modal);
  }

  excluir(conta) : void {
    let msg = Alert.create({
      title: "Exclusão",
      message: "Confirma a exclusão da conta "+conta.nome+"?",
      buttons: [{
        text: "Sim",
        handler: () => {
          new ContasDao().excluir(conta, () => {
            this.mensagem("Exclusão confirmada");
            let pos = this.lista.indexOf(conta);
            this.lista.splice(pos, 1);
          });
        }
      }, {
        text: "Não"
      }]
    });
    this.nav.present(msg);
  }

  fechar() : void {
    this.view.dismiss();
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
